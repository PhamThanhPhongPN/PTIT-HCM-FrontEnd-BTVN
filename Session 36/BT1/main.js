let savedName = JSON.parse(localStorage.getItem("name")) || null;
const formEl = document.querySelector("#form");

function sayHello(event) {
    event.preventDefault();
    
    const currentForm = document.querySelector("#form");
    const nameInput = currentForm.querySelector("input[name='name']");
    const name = nameInput.value;

    localStorage.setItem("name", JSON.stringify(name));

    const dataHTML = `
        <form class="form" id="form">
            <h2>👋 Chào bạn, ${name}</h2>
            <button class="btn btn-primary" type="button" onclick="changeName()">Đổi tên</button>
        </form>
    `;

    formEl.innerHTML = dataHTML;
}

function changeName() {
    localStorage.removeItem("name");

    const dataHTML = `
        <form class="form" id="form" onsubmit="sayHello(event)">
            <h2>Nhập tên của bạn</h2>
            <div class="input_box">
                <input type="text" name="name" required class="input">
                <button class="btn btn-primary">Lưu</button>
            </div>
        </form>
    `;

    formEl.innerHTML = dataHTML;
}

if (savedName) {
    const dataHTML = `
        <form class="form" id="form">
            <h2>👋 Chào bạn, ${savedName}</h2>
            <button class="btn btn-primary" type="button" onclick="changeName()">Đổi tên</button>
        </form>
    `;
    formEl.innerHTML = dataHTML;
}
