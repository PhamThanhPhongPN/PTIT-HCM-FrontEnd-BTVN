function login(){
    const name = document.getElementById("user").value;
    const pass = document.getElementById("password").value;
    if (name === "huanrose@gmail.com" && pass === "123456"){
        console.log("Thành công");
    } else {
        console.log("Thất bại");
    }
}