export default (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Field "Email" is required';
  }
  if (!values.password) {
    errors.password = 'Field "Password" is required';
  }

  return errors;
};
