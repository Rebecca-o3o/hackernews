import React, { Component } from 'react'
import Navigation from './Navigation'
import './App.css'

class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(e) {
    // console.log("scroll detected")

    //TODO: loading more stories and style box shadow
    this.setState({
      // transform: itemTranslate
    })
  }

  render() {
    return (
      <header className="App-header">

        <h1 className="App-title">Hackernews styled</h1>
        <Navigation />

      </header>

    )
  }
}

export default Header
