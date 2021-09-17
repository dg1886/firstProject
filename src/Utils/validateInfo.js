const EMAIL = 'email';
const PASSWORD = 'password';
const CONFIRM_PASSWORD = 'password2';

const isEmptyField = (str) => !str.length;

const isValidEmail = (str) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(str);

const isPasswordLength = (str) => str.length < 5;

const isPasswordMatch = (pass, confPass) => pass !== confPass;

export default function validateInfo(value, name, { password }) {
  switch (name) {
    case EMAIL:
      if (isEmptyField(value)) {
        return 'Email required';
      }
      if (isValidEmail(value)) {
        return 'Email address is invalid';
      }
      return false;

    case PASSWORD:
      if (isEmptyField(value)) {
        return 'Password is required';
      }
      if (isPasswordLength(value)) {
        return 'Password needs to be 5 characters or more';
      }
      return false;

    case CONFIRM_PASSWORD:
      if (isEmptyField(value)) {
        return 'Confirm password is required';
      }
      if (isPasswordMatch(password, value)) {
        return 'Passwords do not match';
      }
      return false;

    default: return false;
  }
}
