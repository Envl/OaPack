import React from 'react'
import logo from './logo.svg'
import './App.css'
import DropDown from './components/DropDown'

function App() {
  return (
    <div className='App'>
      <DropDown title='DropDown' onClick={e => console.log(e.target)}>
        <div>aaa</div>
        <div>aaa</div>
        <div>aaa</div>
      </DropDown>
    </div>
  )
}

export default App
