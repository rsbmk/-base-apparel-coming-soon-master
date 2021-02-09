/* Regex to validate the email */
const regexEmain = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

/* handling the send button of the form */
button.addEventListener("click", () => {
  if (regexEmain.test(input.value)) handleIsOkeyMessage();
  else handleErrorMessage();
});

function handleIsOkeyMessage() {
  messageError.classList.add("error");
  iconError.classList.add("error");
  input.value = "";
  alert(`Is okey ${input.value}`);
}
function handleErrorMessage() {
  messageError.classList.remove("error");
  iconError.classList.remove("error");
}
