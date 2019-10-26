import React, {useState} from 'react'
import PropTypes from 'prop-types'

const FilterGroup = props => {
  if (props.children) {
    throw new Error('FilterGroup from OaPack can not have children components')
  }
  const [filterStatus, setFilterStatus] = useState(
    // turn Array into Dictionary
    props.filters &&
      props.filters.reduce((pre, cur) => {
        const k = typeof cur === 'object' ? cur.name : cur
        pre[k] = {
          pushed:
            props.defaultIndex !== undefined
              ? props.filters[props.defaultIndex] === cur
                ? true
                : false
              : false,
          disabled: cur.disabled !== undefined ? false : cur.disabled,
        }
        return pre
      }, {}),
  )
  console.log(filterStatus)

  function callBack(title, evt) {
    if (!filterStatus) {
      return
    }
    if (props.single) {
      Object.keys(filterStatus).map(key => (filterStatus[key].pushed = false))
      filterStatus[title].pushed = true
    } else {
      filterStatus[title].pushed = !filterStatus[title].pushed
    }
    props.onFilterUpdate &&
      props.onFilterUpdate(
        Object.keys(filterStatus).filter(key => filterStatus[key].pushed),
      )
    const tmp = {}
    Object.assign(tmp, filterStatus)
    setFilterStatus(tmp)
  }

  return (
    <div
      className={
        'oa-filters-wrapper ' + (props.className ? props.className : '')
      }>
      {props.filters &&
        props.filters.map(obj => {
          const title = obj.name !== undefined ? obj.name : obj
          return (
            <button
              disabled={obj.disabled === undefined ? false : obj.disabled}
              key={'filter' + title}
              onClick={evt => callBack(title, evt)}
              className={
                'oa-filter-toggle ' +
                (filterStatus[title].pushed ? 'on' : 'off')
              }>
              {title}
            </button>
          )
        })}
    </div>
  )
}

FilterGroup.propTypes = {
  filters: PropTypes.array.isRequired,
  defaultIndex: PropTypes.number,
}
FilterGroup.defaultProps = {
  defaultIndex: 0,
}

export default FilterGroup
