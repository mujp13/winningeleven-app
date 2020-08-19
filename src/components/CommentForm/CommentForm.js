import React, { Component } from 'react'
import TeamContext from '../../contexts/TeamContext'
import TeamApiService from '../../services/Team-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './CommentForm.css'

export default class CommentForm extends Component {
  static contextType = TeamContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { Team } = this.context
    const { text } = ev.target
    TeamApiService.postComment(Team.id, text.value)
      .then(this.context.addComment)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='CommentForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            required
            aria-label='Type a comment...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a comment..'>
          </Textarea>
        </div>
        <Button type='submit'>
          Post comment
        </Button>
      </form>
    )
  }
}
