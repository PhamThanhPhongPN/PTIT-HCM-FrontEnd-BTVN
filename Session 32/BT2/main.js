let click = 0;
const divEl = document.querySelector("#box");
function countClick() {
    click++;
    let dataHTML = `<p>Số lần bấm: ${click}</p>`;
    divEl.innerHTML = dataHTML;
}