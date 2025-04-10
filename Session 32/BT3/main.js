subjectList = [
    {
        subject: "Toán",
    },
    {
        subject: "Lý",
    },
    {
        subject: "Hóa",
    },
];

function renderSubject(){
    const ulEl = document.querySelector("#SubjectUl");
    let dataHTML = '';
    for (let i = 0; i < subjectList.length ; i++){
        dataHTML += `
        <p>${i + 1}. ${subjectList[i].subject}</p>
        `
        ulEl.innerHTML = dataHTML;
    }
}

function addSubject(){
    const newSubject = document.getElementById("subject").value;
    if (newSubject !== "") {
        subjectList.push({ subject: newSubject });
        renderSubject(); 
        document.getElementById("subject").value = ""; 
    } else {
        alert("Tên môn học không được để trống!");
    }
}

renderSubject();