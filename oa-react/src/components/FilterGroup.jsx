import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const FilterGroup = props => {
  if (props.children) {
    throw new Error('FilterGroup from OaPack can not have children components')
  }
  let pushedCounter = 0
  const [filterStatus, setFilterStatus] = useState(
    // turn Array into Dictionary
    props.filters &&
      props.filters.reduce((pre, cur) => {
        const k = typeof cur === 'object' ? cur.name : cur
        const pushed = cur.pushed === undefined ? false : cur.pushed
        if (pushed) {
          pushedCounter++
          if (props.single && pushedCounter >= 2) {
            throw new Error(
              'FilterGroup with "single" option can only have one filter pushed',
            )
          }
        }
        pre[k] = {
          pushed: pushed,
          disabled: cur.disabled === undefined ? false : cur.disabled,
        }
        return pre
      }, {}),
  )
  useEffect(() => {
    return (
      props.filters &&
      props.filters.reduce((pre, cur) => {
        const k = typeof cur === 'object' ? cur.name : cur
        const pushed = cur.pushed === undefined ? false : cur.pushed
        if (pushed) {
          pushedCounter++
          if (props.single && pushedCounter >= 2) {
            throw new Error(
              'FilterGroup with "single" option can only have one filter pushed',
            )
          }
        }
        pre[k] = {
          pushed: pushed,
          disabled: cur.disabled === undefined ? false : cur.disabled,
        }
        return pre
      }, {})
    )
  }, [props.filters])
  // console.debug(filterStatus)

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
      {filterStatus &&
        Object.keys(filterStatus).map(k => (
          <button
            disabled={filterStatus[k].disabled}
            key={'filter' + k}
            onClick={evt => callBack(k, evt)}
            className={
              'oa-filter-toggle ' + (filterStatus[k].pushed ? 'on' : 'off')
            }>
            {k}
          </button>
        ))}
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
