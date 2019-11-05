import React, {useState} from 'react'

const CubeMenu = ({f, u, l, b, d, r}) => {
  const facets = ['u', 'f', 'l', 'r', 'd', 'b']
  const [hoverFacet, setHoverFacet] = useState('')
  return (
    <div className={`oa-cube hover-${hoverFacet}`}>
      {facets.map(f => (
        <div
          className={`cube-facet facet-${f}`}
          key={f}
          onMouseEnter={() => {
            setHoverFacet(f)
          }}
          onMouseMove={() => {
            setHoverFacet(f)
          }}
          onMouseLeave={() => {
            setHoverFacet('')
          }}>
          {
            {
              u: u ? u : '',
              f: f ? f : '',
              l: l ? l : '',
              d: d ? d : '',
              r: r ? r : '',
              b: b ? b : '',
            }[f]
          }
        </div>
      ))}
    </div>
  )
}

export default CubeMenu