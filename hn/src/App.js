import React, { Component } from 'react'
import Header from './Header'
import Topstories from './Topstories'
import './App.css'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App">

        <Header />

        <Topstories />

      </div>
    )
  }
}

export default App
