import React from 'react'
import logo from './logo.svg'
import {Card, DropDown, Button} from './exports'

function App() {
  return (
    <div className='App' style={{display: 'flex'}}>
      <DropDown title='DropDown' onClick={e => console.log(e.target)}>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
      </DropDown>
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
      <button>normal</button>
      <Button onClick={() => console.log('ssss')} test='aa'>
        btn
      </Button>
      <Card>
        <button>normal</button>
      </Card>
    </div>
  )
}

export default App
