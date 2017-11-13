import React from 'react';
import { Button, Form, Segment, Divider } from 'semantic-ui-react';
import { Field } from 'redux-form';
import ReduxFormField from '../ReduxFormField';


export default props => (
  <Segment >
    <Form onSubmit={props.handleSubmit}>
      <Field
        name="username"
        label="Username"
        component={ReduxFormField}
        placeholder="Username"
      />
      <Field
        name="password"
        label="Password"
        component={ReduxFormField}
        placeholder="Password"
        type="password"
      />
      <Button type="submit" primary disabled={props.invalid || props.pristine}>Login</Button>
      <Divider />
      <div style={{ textAlign: 'center' }}>or</div>
      <Divider />
      <Button
        style={{ margin: 'auto' }}
        content="Sign in via VK"
        icon="vk"
        primary
        onClick={() => {}}
      />
    </Form>
  </Segment>
);


export { default as validate } from './validate';
