export default (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Field "Title" is required';
  }
  if (!values.original) {
    errors.original = 'Field "Content" is required';
  }

  return errors;
};
