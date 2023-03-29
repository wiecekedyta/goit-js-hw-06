
const inputEl = document.querySelector(".login-form");
const submitHandler = (event) => {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert("Wszystkie pola muszą być uzupełnione");
    }
    console.log({ Email: email.value, Password: password.value });
    event.currentTarget.reset();
}
inputEl.addEventListener("submit", submitHandler);