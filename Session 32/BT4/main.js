const divEl = document.querySelector("#emailValidate")

function validateEmail() {
    const email = document.getElementById("email").value;
    let dataHTML = '';
    if (email.includes("@") && email.includes(".com") || email.includes("@") && email.includes(".vn") ){
        dataHTML = `email hợp lệ!`;
        divEl.innerHTML = dataHTML;
    } else {
        dataHTML = `email không hợp lệ!`;
        divEl.innerHTML = dataHTML;
    }
}