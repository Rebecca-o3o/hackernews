import React, { Component } from 'react'
import './Topstories.css'

const hnPrefix = "https://hacker-news.firebaseio.com/v0/"

export default class Topstories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stories: []
    }
  }

  componentDidMount() {

    //fetch top stories
    try {
      fetch(hnPrefix + 'topstories.json?print=pretty')
        .then(res => res.json())
        .then((ids) => {

          //TODO: variable max amount
          ids.slice(0, 40).forEach((id) => {

            //fetch and add story details to ids:
            fetch(hnPrefix + `/item/${id}.json?print=pretty`)
              .then(item => item.json())
              .then((story) => {

                // console.log(story)

                this.setState({
                  stories: this.state.stories.concat([story])
                })
              })
          })
        })

    } catch (e) {
      this.setState({
        errorMessage: 'Error getting stories from hackernews'
      })
    }
  }


  render() {
    if (!this.state.stories) {
      return <div>Loading...</div>
    }

    const renderStories = () => {
      return this.state.stories.map(story => {
        return (
          <div className="story-container">
            <div className="title">{story.title}</div>
            <div className="story-details">
              <div className="author">Author: {story.by}</div>
              <a href={`${story.url}`}>Go to Article</a>
            </div>
          </div>
        )
      })
    }

    return (
      <div className="news">
        {renderStories()}
      </div>
    )
  }
}
