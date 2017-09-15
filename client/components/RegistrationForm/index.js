import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Field } from 'redux-form';
import ReduxFormField from '../ReduxFormField';


export default props => (
  <Segment >
    <Form onSubmit={props.handleSubmit}>
      <Field
        name="username"
        label="Email"
        component={ReduxFormField}
        placeholder="Email"
      />
      <Field
        name="password"
        label="Password"
        component={ReduxFormField}
        placeholder="Password"
      />
      <Field
        name="confirmPassword"
        label="Confirm Password"
        component={ReduxFormField}
        placeholder="Confirm Password"
      />
      <Button type="submit" primary disabled={props.invalid || props.pristine}>Register</Button>
    </Form>
  </Segment>
);


export { default as validate } from './validate';
