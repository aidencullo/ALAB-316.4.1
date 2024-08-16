const registration = document.getElementById("registration");
const username = registration.elements["username"];
const email = registration.elements["email"];
const password = registration.elements["password"];
const passwordCheck = registration.elements["passwordCheck"];

function validateUsername(evt) {
  const usernameVal = username.value;
  const uniqueChars = new Set(usernameVal);
  if (uniqueChars.size < 2) {
    alert(
      "Your username must contain at least two unique characters."
    );
    username.focus();
    evt.returnValue = false;
    return false;
 }
  evt.returnValue = true;
  return usernameVal;
}

function validateEmail(evt) {
  const emailVal = email.value;
  if (emailVal.includes("example.com")) {
    alert(
      "Your email address must not contain 'example.com'."
    );
    email.focus();
    evt.returnValue = false;
    return false;
  }
  evt.returnValue = true;
  return emailVal;
}

function validatePassword(evt) {
  const passwordVal = password.value;
  const passwordCheckVal = passwordCheck.value;
  
  if (passwordVal.toLowerCase().includes("password")) {
    alert(
      "Your password must not contain the word 'password'."
    );
    password.focus();
    evt.returnValue = false;
    return false;
  }
  if (passwordVal.includes(username.value)) {
    alert(
      "Your password must not contain your username."
    );
    password.focus();
    evt.returnValue = false;
    return false;
  }
  if (passwordVal !== passwordCheckVal) {
    alert(
      "Your passwords do not match."
    );
    password.focus();
    evt.returnValue = false;
    return false;
  }
  evt.returnValue = true;
  return passwordVal;
}

registration.addEventListener("submit", validateUsername);
registration.addEventListener("submit", validateEmail);
registration.addEventListener("submit", validatePassword);
