import React from 'react';
import { Grid, Button, Form } from 'semantic-ui-react';
import { Field } from 'redux-form';


export default props => (
  <Form onSubmit={props.handleSubmit}>
    <Form.Field>
      <label>Title</label>
      <Field name="title" component="input" placeholder="Title" />
    </Form.Field>
    <Form.Field>
      <label>Content</label>
      <Field name="original" component="textarea" placeholder="Title" />
    </Form.Field>
    <Button primary type="submit">Save</Button>
  </Form>
);
