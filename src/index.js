const registration = document.getElementById("registration");
const username = registration.elements["username"];

function validateUsername(evt) {
  let usernameVal = username.value;
  const uniqueChars = new Set(usernameVal);

  if (uniqueChars.size < 2) {
    alert(
      "Your username must contain at least two unique characters."
    );
    username.focus();
    evt.returnValue = false;
    return false; 
 }
}

registration.addEventListener("submit", validateUsername);
