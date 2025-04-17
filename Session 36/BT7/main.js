if (localStorage.getItem("users")) {
} else {
    localStorage.setItem("users", JSON.stringify([]))
}

function register(event) {
    event.preventDefault()
    let newName = document.getElementById("nameRegister").value
    let newPass = document.getElementById("passRegister").value

    let users = JSON.parse(localStorage.getItem("users"))
    if (users.some(user => user.name === newName)) {
        alert("Trùng tên đăng nhập!")
        return;
    }

    users.push({name: newName, password: newPass});

    localStorage.setItem("users", JSON.stringify(users))

    alert("Register thành công!")
    window.location.href = "login.html";
}

function login(event) {
    event.preventDefault();
    let logName = document.getElementById("nameLog").value;
    let logPass = document.getElementById("passLog").value;
    let rememberMe = document.getElementById("remember").checked;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let viableUser = users.find(user => user.name === logName && user.password === logPass);
    if (viableUser) {
        alert("Đăng nhập thành công!");
        if (rememberMe) {
            localStorage.setItem("currentUser", JSON.stringify(viableUser));
            localStorage.setItem("authentication", JSON.stringify(true));
        } else {
            sessionStorage.setItem("currentUser", JSON.stringify(viableUser));
            sessionStorage.setItem("authentication", JSON.stringify(true));
        }
        window.location.href = "home.html";
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
    }
}


function handleAuth() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || sessionStorage.getItem("currentUser"));
    const isAuthenticated = JSON.parse(localStorage.getItem("authentication") || sessionStorage.getItem("authentication"));
    const currentPath = window.location.pathname;
    if (!isAuthenticated || !currentUser) {
        if (!currentPath.includes("login.html")) {
            window.location.href = "login.html";
        }
        return;
    }
    if (!currentPath.includes("home.html")) {
        window.location.href = "home.html";
        return;
    }
    const nameContainer = document.getElementById("username");
    if (nameContainer) {
        nameContainer.textContent = currentUser.name;
    }
}



function logout() {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authentication");
    sessionStorage.removeItem("currentUser");
    sessionStorage.removeItem("authentication");
    window.location.href = "login.html";
}
