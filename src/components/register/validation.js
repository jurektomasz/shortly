export function registrationValidation({
  username,
  email,
  password,
  passwordConfirmation,
}) {
  const emptyInputs =
    !username ||
    username === "" ||
    !email ||
    email === "" ||
    !password ||
    password === "";

  const emailRegex =
    // eslint-disable-next-line
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  let message = "";

  if (emptyInputs) {
    message = "Username, email or password not provided";
  } else if (!emailRegex.test(email)) {
    message = "Invalid email format";
  } else if (password !== passwordConfirmation) {
    message = "Password and password confirmation must be the same";
  } else {
    message = "";
  }

  return message;
}
