import React, {useState} from 'react'
import logo from './logo.svg'
import {Carousel, Button, FilterGroup, Card, DropDown} from './exports'

function Cards() {
  return (
    <Card>
      <Card className='ss'>
        <Card>
          <Card onClick={() => console.log('second')}>
            <Card>
              <Button onClick={() => console.log('bttn')}>btn</Button>
            </Card>
          </Card>
        </Card>
      </Card>
    </Card>
  )
}

function Test(props) {
  const [pressed, setPressed] = useState(false)
  return (
    <button
      className={pressed ? 'btn-a' : 'btn-b'}
      onClick={() => setPressed(!pressed)}>
      test
    </button>
  )
}
function App() {
  return (
    <div className='App' style={{display: 'flex'}}>
      <DropDown title='DropDown' onClick={e => console.log(e.target)}>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
      </DropDown>
      <Test />
      <Button
        onClick={() => console.log('ssss')}
        test='aa'
        className='sss'
        style={{width: '100%'}}>
        btn
      </Button>
      {/* use event.isToggleOn to check the status of toggle button */}
      <Button type={'toggle'} onClick={e => console.log(e.isToggleOn)} disabled>
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
        filters={[
          {name: 'Yes...', disabled: false},
          {name: 'we', disabled: true},
          'are..', // enabled by default
          {name: 'Filters!', pushed: true},
          'Click MEEE!!!!!!',
        ]}
        // defaultIndex/={0}
        onFilterUpdate={e => console.log(e)}
      />
      <FilterGroup
        onFilterUpdate={e => console.log(e)}
        className='oa-secret'
        filters={[
          '中文',
          '字体',
          {name: '也', pushed: true},
          {name: '还行', pushed: true},
          '吧',
        ]}
        // defaultIndex={0}
      />
      <Button className='oa-secret'>测试</Button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt
        diam felis, sed tempor est pellentesque vel. Mauris tempus convallis.
        中文lorem 这是一段测试文字, 门前大桥下游过一群鸭, 快来快来数一数,
        二四六七八
      </p>
      <input className='oa-input' type='text' placeholder='江南皮革厂倒闭了' />
      <Carousel style={{height: '200px', width: '550px'}}>
        <input type='text' placeholder='也可以这样' />
        <Button onClick={e => console.log(e.target.nextSibling)}>Btn2</Button>
        <Card>
          <Card>
            <Card></Card>
          </Card>
        </Card>
        <DropDown title='打开看看' onClick={e => console.log(e.target)}>
          <div>A</div>
          <div>b</div>
          <div>c</div>
        </DropDown>
      </Carousel>
      <Carousel className='oa-secret'>
        <h1>dd</h1>
      </Carousel>
    </div>
  )
}

export default App
