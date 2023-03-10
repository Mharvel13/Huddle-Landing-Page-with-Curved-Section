// alert('hello')
const form = document.getElementById("form");
const email = document.getElementById("email");
const emailErrorText = document.getElementById("emailErrorText");

form.onsubmit = (e) => {
  e.preventDefault();

  if (email.value == "") {
    email.classList.add("error");
    emailErrorText.innerHTML = "Enter an email address";
  } else {
    checkEmail();
  }

  email.onkeyup = () => {
    checkEmail();
  };

  function checkEmail() {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.value.match(emailPattern)) {
      email.classList.add("error");
      emailErrorText.innerHTML = "Check Your Email";
    } else {
      email.classList.remove("error");
      email.classList.add("sucess");
      emailErrorText.innerHTML = "";
    }
  }

  if (!email.classList.contains("error")) {
    window.location.href = "#";
    console.log("form Submitted!!!");
  }
};
