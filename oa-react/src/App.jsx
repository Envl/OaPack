import React from 'react'
import logo from './logo.svg'
import {DropDown, Button} from './exports'

function App() {
  return (
    <div className='App' style={{display: 'flex'}}>
      <DropDown title='DropDown' onClick={e => console.log(e.target)}>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
      </DropDown>
      <Button>btn</Button>
      <button>normal</button>
      <Button onClick={() => console.log('ssss')} test='aa'>
        btn
      </Button>
      <button>normal</button>
    </div>
  )
}

export default App
