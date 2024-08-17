const registration = document.getElementById("registration");

function validate(evt) {
  const { username, email, password, passwordCheck } = registration.elements;

  // Validate Username
  const usernameVal = username.value;
  const uniqueChars = new Set(usernameVal);
  if (uniqueChars.size < 2) {
    alert("Your username must contain at least two unique characters.");
    username.focus();
    evt.preventDefault();
    return false;
  }

  // Check if username is already taken
  if (localStorage.getItem(usernameVal.toLowerCase())) {
    alert("Your username is already taken.");
    username.focus();
    evt.preventDefault();
    return false;
  }

  // Validate Email
  const emailVal = email.value;
  if (emailVal.includes("example.com")) {
    alert("Your email address must not contain 'example.com'.");
    email.focus();
    evt.preventDefault();
    return false;
  }

  // Validate Password
  const passwordVal = password.value;
  if (passwordVal.toLowerCase().includes("password")) {
    alert("Your password must not contain the word 'password'.");
    password.focus();
    evt.preventDefault();
    return false;
  }
  if (passwordVal.includes(usernameVal)) {
    alert("Your password must not contain your username.");
    password.focus();
    evt.preventDefault();
    return false;
  }
  if (passwordVal !== passwordCheck.value) {
    alert("Your passwords do not match.");
    password.focus();
    evt.preventDefault();
    return false;
  }

  // Store Credentials
  localStorage.setItem(usernameVal.toLowerCase(), JSON.stringify({
    email: emailVal.toLowerCase(),
    password: passwordVal
  }));

  alert("Your registration was successful!");
  return true;
}

registration.addEventListener("submit", validate);
