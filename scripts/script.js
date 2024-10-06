const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const styleElem = document.head.appendChild(document.createElement("style"));


function onPasswordEntry() {
    console.log(password.value, passwordConfirm.value);
    if (password.value !== passwordConfirm.value) {
        password.after("* Passwords must match")

        password.style.borderColor = "red";
        passwordConfirm.style.borderColor = "red";
    }
    else {
        // styleElem.innerHTML = "";

    }
}

password.addEventListener("keyup", onPasswordEntry);
passwordConfirm.addEventListener("keyup", onPasswordEntry);