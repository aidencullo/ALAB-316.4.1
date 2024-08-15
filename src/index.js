const registration = document.getElementById("registration");
const username = registration.elements["username"];
const email = registration.elements["email"];

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

registration.addEventListener("submit", validateUsername);
registration.addEventListener("submit", validateEmail);
