const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  if (!email || !password) {
    alert("Vui lòng nhập đầy đủ Email và Password.");
    return;
  }
  const user = registeredUsers.find(u => u.email === email && u.password === password);
  if (user) {
    alert("Đăng nhập thành công!");
    window.location.href = "home.html";
  } else {
    alert("Email hoặc mật khẩu không đúng.");
  }
});
