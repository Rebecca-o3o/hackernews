import React, { Component } from 'react'
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
      <ul className="nav-container">
        <li>Top Stories</li>
        <li>New Stories</li>
        <li>Best Stories</li>
      </ul>
    )
  }
}
