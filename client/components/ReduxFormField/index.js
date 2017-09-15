import React, { PropTypes } from 'react';
import { Form } from 'semantic-ui-react';

export default function ReduxFormField({ input, label, meta, as: As = Form.Input, ...props }) {
  const { touched, error } = meta;

  return (
    <Form.Field>
      { label && <label>{label}</label> }
      <As
        {...input}
        value={input.value}
        {...props}
        onChange={(e, { value }) => input.onChange(value)}
        error={!!(touched && error)}
      />
      {touched && (error && <span>{error}</span>)}
    </Form.Field>
  );
}

ReduxFormField.propTypes = {
  as: PropTypes.any,
  input: PropTypes.any,
  label: PropTypes.any,
  meta: PropTypes.any,
};
