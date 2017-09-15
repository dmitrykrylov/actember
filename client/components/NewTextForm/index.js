import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import { Field } from 'redux-form';
import ReduxFormField from '../ReduxFormField';


export default props => (
  <Form error={props.dirty && props.invalid} onSubmit={props.handleSubmit}>
    <Field
      name="title"
      label="Title"
      component={ReduxFormField}
      placeholder="Title"
    />
    <Field
      name="original"
      label="Content"
      component={ReduxFormField}
      as={Form.TextArea}
      placeholder="Content"
    />
    <Button primary type="submit" disabled={props.invalid || props.pristine}>Save</Button>
  </Form>
);

export { default as validate } from './validate';
