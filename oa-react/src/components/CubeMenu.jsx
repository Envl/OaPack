import React, {useState} from 'react'

const CubeMenu = () => {
  const facets = ['u', 'd', 'l', 'r', 'f', 'b']
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
          {f}
        </div>
      ))}
    </div>
  )
}

export default CubeMenu
