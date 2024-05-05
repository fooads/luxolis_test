const validation = (values) => {
  let errors = {};

  if (!values.username) {
    errors.username = "Username required";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else {
    if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]/.test(
        values.password
      )
    ) {
      errors.password = "Wrong combination";
    }
  }

  return errors;
};

export default validation;
