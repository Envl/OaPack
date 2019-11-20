import React, {useState} from 'react'

const CubeMenu = ({f, u, l, b, d, r, ...props}) => {
  const facets = ['u', 'f', 'l', 'r', 'd', 'b']
  const [hoverFacet, setHoverFacet] = useState('')
  return (
    <div
      className={`oa-cube hover-${hoverFacet} ${
        props.className ? props.className : ''
      }`}>
      {facets.map(facet => (
        <div
          className={`cube-facet facet-${facet}`}
          key={facet}
          onMouseEnter={() => {
            setHoverFacet(facet)
          }}
          onMouseMove={() => {
            setHoverFacet(facet)
          }}
          onMouseLeave={() => {
            setHoverFacet('')
          }}>
          {
            {
              u: u ? u : '',
              f: f ? f : '',
              l: l ? l : '',
              r: r ? r : '',
              d: d ? d : '',
              b: b ? b : '',
            }[facet]
          }
        </div>
      ))}
    </div>
  )
}

export default CubeMenu
