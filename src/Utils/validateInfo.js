export default function validateInfo(values, name) {
  const errors = {};
  console.log(name);
  if (values.email) {
    console.log(1);
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  } else errors.email = 'Email required';

  if (values.password) {
    console.log(2);
    if (values.password.length < 5) {
      errors.password = 'Password needs to be 5 characters or more';
    }
  } else errors.password = 'Password is required';

  if (values.password2) {
    console.log(3);
    if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
  } else errors.password2 = 'Password is required';
  return errors;
}
