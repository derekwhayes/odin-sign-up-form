const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const passwordWarning = document.querySelector(".password-warning");


function onPasswordEntry() {
    console.log(password.value, passwordConfirm.value);
    if (password.value !== passwordConfirm.value) {
        passwordWarning.style.visibility = "visible";
        password.style.borderColor = "red";
        passwordConfirm.style.borderColor = "red";
    }
    else {
        passwordWarning.style.visibility = "hidden";
        password.style.borderColor = "#444";
        passwordConfirm.style.borderColor = "#444";
    }
}

password.addEventListener("keyup", onPasswordEntry);
passwordConfirm.addEventListener("keyup", onPasswordEntry);