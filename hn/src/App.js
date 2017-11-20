import React, { Component } from 'react'
import Topstories from './Topstories'
import Navigation from './Navigation'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Hackernews styled</h1>
          <Navigation />

        </header>

        <Topstories />

      </div>
    )
  }
}

export default App
