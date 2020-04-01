import { Fab, Dialog, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { Add } from '@material-ui/icons'
import React, { Component } from 'react'
import { ExercisesContext } from '../../context'
import Form from './Form'

class CreateDialog extends Component {
  static contextType = ExercisesContext

  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  };

  handleFormSubmit = exercise => {
    this.handleToggle()

    this.context.onCreate(exercise)
  };

  render () {
    const { open } = this.state
    const { muscles } = this.context

    return (
      <>
        <Fab
          onClick={this.handleToggle}
          color='secondary'
          size='small'
        >
          <Add />
        </Fab>

        <Dialog
          open={open}
          onClose={this.handleToggle}
          fullWidth
          maxWidth='xs'
        >
          <DialogTitle>Create a New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
            </DialogContentText>
            <Form
              muscles={muscles}
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
      </>
    )
  }
}

export default CreateDialog
