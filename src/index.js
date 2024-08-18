const registration = document.getElementById("registration");

function showError(element, message, evt) {
  alert(message);
  element.focus();
  evt.preventDefault();
}

function validateRegistration(evt) {
  const { username, email, password, passwordCheck } = registration.elements;
  const errors = [];

  // Validate Username
  const usernameVal = username.value;
  const uniqueChars = new Set(usernameVal);
  if (uniqueChars.size < 2) {
    errors.push({ element: username, message: "Your username must contain at least two unique characters." });
  } else if (localStorage.getItem(usernameVal.toLowerCase())) {
    errors.push({ element: username, message: "Your username is already taken." });
  }

  // Validate Email
  const emailVal = email.value;
  if (emailVal.includes("example.com")) {
    errors.push({ element: email, message: "Your email address must not contain 'example.com'." });
  }

  // Validate Password
  const passwordVal = password.value;
  if (passwordVal.toLowerCase().includes("password")) {
    errors.push({ element: password, message: "Your password must not contain the word 'password'." });
  } else if (passwordVal.includes(usernameVal)) {
    errors.push({ element: password, message: "Your password must not contain your username." });
  } else if (passwordVal !== passwordCheck.value) {
    errors.push({ element: password, message: "Your passwords do not match." });
  }

  if (errors.length > 0) {
    // Show the first error and stop form submission
    showError(errors[0].element, errors[0].message, evt);
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

registration.addEventListener("submit", validateRegistration);

const login = document.getElementById("login");


function validateLogin(evt) {
  const { username, password } = login.elements;
  const errors = [];

  // Validate Username
  const usernameVal = username.value;
  if (!localStorage.getItem(usernameVal.toLowerCase())) {
    errors.push({ element: username, message: "Your username does not exist." });
  }

  if (errors.length > 0) {
    // Show the first error and stop form submission
    showError(errors[0].element, errors[0].message, evt);
    return false;
  }
  return true;
}

login.addEventListener("submit", validateLogin);
