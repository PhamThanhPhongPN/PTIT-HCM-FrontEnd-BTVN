if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify([]));
}

function confirmPass(pass, confirm) {
    if (pass !== confirm) {
        alert("Wrong password confirmation!");
        return false;
    }
    return true;
}


function register(event) {
    event.preventDefault();
    let newEmail = document.getElementById("email").value
    let newPass = document.getElementById("password").value
    let confirmation = document.getElementById("confirm").value

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!confirmPass(newPass, confirmation)) {
        return;
    }

    const existingUser = users.find(user => user.email === newEmail);
    if (existingUser) {
        alert("Email already registered.");
        return;
    }

    const newUser = {
        email: newEmail,
        password: newPass,
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully!");
    event.target.reset()
}