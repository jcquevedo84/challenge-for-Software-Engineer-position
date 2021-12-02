
const validateEmail = email => {
  const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return emailRegexp.test(email);
};

const validateLength = (string, field_name = 'password', min = 6, max = 20) => {
  let ret = {
    status: true,
    message: ''
  };

  if (string.length < min) {
    ret.status = false;
    ret.message = `The ${field_name} must be at least ${min} characters.`;
  }

  if (string.length > max) {
    ret.status = false;
    ret.message = `The ${field_name} may not be greater than ${max} characters.`;
  }

  return ret;
};



/**
 * Validates if the given value is a non-empty string.
 * @param {*} value
 */
const validateString = value => {
  if (typeof value === 'string' && value.trim().length > 0) {
    return value.trim();
  }
  return false;
};

module.exports = {
  validateEmail,
  validateLength,
  validateString
};
