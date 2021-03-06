import './_index.scss'
import './_App.scss'

import Button, { Card } from './components/Button'
import React, { useEffect, useRef, useState } from 'react'
import { Sidebar, SidebarInjector, SidebarItem } from './components/Sidebar'

import Carousel from './components/Carousel'
import CubeMenu from './components/CubeMenu'
import DropDown from './components/DropDown'
import FilterGroup from './components/FilterGroup'

function Cards() {
  return (
    <Card>
      <Card className="ss">
        <Card>
          <Card onClick={() => console.log('second')}>
            <Card>
              <Button onClick={() => console.log('bttn')}>btn</Button>
            </Card>
            <DropDown>
              <li>1</li>
              <li>2</li>
            </DropDown>
          </Card>
        </Card>
      </Card>
    </Card>
  )
}

function DrawingLine({ line }) {
  const pathData = 'M ' + line.map(p => p.x + ' ' + p.y).join(' L ')
  return <path d={pathData} />
}
function Drawing({ lines }) {
  return (
    lines.length > 0 && (
      <svg className="svg-lines">
        {lines.map((line, index) => (
          <DrawingLine key={index} line={line} />
        ))}
      </svg>
    )
  )
}

function Test(props) {
  const [pressed, setPressed] = useState(false)
  return (
    <button
      className={pressed ? 'btn-a' : 'btn-b'}
      onClick={() => setPressed(!pressed)}
    >
      test
    </button>
  )
}
function lineLen(line) {
  return Math.sqrt(
    (line[0].x - line[1].x) * (line[0].x - line[1].x) +
      (line[0].y - line[1].y) * (line[0].y - line[1].y)
  )
}
function App() {
  const [ls, setLines] = useState([])
  const ref = useRef(null)
  const [target, setTarget] = useState(false)
  const children = document.querySelector('#root').children
  // console.log('App', children)
  useEffect(() => {
    console.log(ref.current.childNodes, 'ffff')
  }, [])
  return (
    <SidebarInjector
      items={
        <>
          <SidebarItem
            target="_blank"
            to="/test"
            brief="CV"
            detail="CV"
          ></SidebarItem>
          <SidebarItem to="/" brief="P." detail="Projects"></SidebarItem>
          <SidebarItem to="/" brief="H." detail="Home"></SidebarItem>
        </>
      }
    >
      <div
        ref={ref}
        className="App"
        style={{ display: 'flex' }}
        onClick={e => {
          if (target && target.click) {
            console.log(target)
            console.log(ref.current.childNodes)
            target.click()
          }
        }}
        onMouseMove={e => {
          const lines = ['dd']
          let len = 1000000
          ref.current.childNodes.forEach(elem => {
            if (elem.localName !== 'button') {
              return
            }
            const rect = elem.getBoundingClientRect()
            const ldist = [
              { x: e.pageX, y: e.pageY },
              { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 },
            ]
            const ldraw = [
              { x: e.clientX, y: e.clientY },
              { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 },
            ]
            const newLen = lineLen(ldist)
            if (newLen < len) {
              len = newLen
              lines[0] = ldraw

              setTarget(elem)
            }
          })
          setLines(lines)
        }}
      >
        <Button type="toggle">Laser Pointer</Button>
        <Button type="toggle">Laser Pointer</Button>
        <Button type="toggle">Laser Pointer</Button>
        <Button type="toggle">Laser Pointer</Button>
        <Button type="toggle">Laser Pointer</Button>
        <Button type="toggle">Laser Pointer</Button>
        <Button type="toggle">Laser Pointer</Button>
        <div className="test"></div>
        {/* <Drawing lines={ls} /> */}
        <Test />
        <DropDown name="Down" onClick={e => console.log(e.target)}>
          <div>aaa</div>
          <div>aaa</div>
          <div>aaa</div>
        </DropDown>
        <Test />
        <Button
          onClick={() => console.log('ssss')}
          test="aa"
          className="sss"
          style={{ width: '100%' }}
        >
          btn
        </Button>
        {/* use event.isToggleOn to check the status of toggle button */}
        <Button
          type={'toggle'}
          onClick={e => console.log(e.isToggleOn)}
          disabled
        >
          disabled
        </Button>
        <Button type={'toggle'} onClick={e => console.log(e.isToggleOn)}>
          toggle
        </Button>
        <button>normllal</button>
        <Card>
          <button>normal</button>
        </Card>
        <Cards />
        <FilterGroup
          single
          initialFilters={[
            { name: 'Yes...', disabled: false },
            { name: 'we', disabled: true },
            'are..', // enabled by default
            { name: 'Filters!', pushed: false },
            'Click MEEE!!!!!!',
          ]}
          // defaultIndex/={0}
          onFilterUpdate={e => console.log(e)}
        />
        <FilterGroup
          onFilterUpdate={e => console.log(e)}
          className="oa-secret"
          initialFilters={[
            '中文',
            '字体',
            { name: '也', pushed: true },
            { name: '还行', pushed: true },
            '吧',
          ]}
          // defaultIndex={0}
        />
        <Button className="oa-secret">测试</Button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt diam felis, sed tempor est pellentesque vel. Mauris tempus
          convallis. 中文lorem 这是一段测试文字, 门前大桥下游过一群鸭,
          快来快来数一数, 二四六七八
        </p>
        <input
          className="oa-input"
          type="text"
          placeholder="江南皮革厂倒闭了"
        />
        <Carousel style={{ height: '200px', width: '550px' }}>
          <input type="text" placeholder="也可以这样" />
          <Button onClick={e => console.log(e.target.nextSibling)}>Btn2</Button>
          <Card>
            <Card>
              <Card></Card>
            </Card>
          </Card>
          <DropDown name="打开看看" onClick={e => console.log(e.target)}>
            <div>A</div>
            <div>b</div>
            <div>c</div>
          </DropDown>
        </Carousel>
        <Carousel className="oa-secret">
          <h1>dd</h1>
        </Carousel>
        <CubeMenu
          u="sdsg"
          l={
            <Card>
              <Card></Card>
            </Card>
          }
          f="sdgds"
        />
      </div>
    </SidebarInjector>
  )
}

export default App
