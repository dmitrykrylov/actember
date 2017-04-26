import React from 'react';
import {  Grid, Button, Checkbox, Form } from 'semantic-ui-react'

export default class NewTextPage extends React.Component {

  constructor() {
    super();

    this.state = {
      title: '',
      original: '',
    };
  }

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  }

  handleOriginalChange = (event) => {
    this.setState({ original: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { title, original } = this.state;
    this.props.addText({
      title,
      original,
    });
  }

  render() {
    return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={8}>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Title' />
            </Form.Field>
            <Form.Field>
              <label>Content</label>
              <textarea placeholder='Content' />
            </Form.Field>
            <Button type='submit'>Save</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    );
  }
}
