export default (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Field "Email" is required';
  }
  if (!values.password) {
    errors.password = 'Field "Password" is required';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Field "Confirm Password" is required';
  }
  if (values.password !== '' && values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
