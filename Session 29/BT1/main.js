let contactList = {
    contact: [],

    addContact(id, name, email, phone) {
        this.contact.push({ id, name, email, phone });
    }
}

function AddNewContact(contactList) {
    let id = parseInt(prompt("Nhập id:"));
    if (contactList.contact.some(contact => contact.id === id)) {
        alert("Đã có id này rồi");
        return;
    } else {
        let name = prompt("Nhập tên:");
        let email = prompt("Nhập email");
        let phone = prompt("Nhập số điện thoại");
        contactList.addContact(id, name, email, phone);
        return;
    }
}

function ShowList(contactList) {
    if (contactList.contact.length === 0) {
        alert("Danh sách chưa có thông tin nào");
        return;
    } else {
        let contactInfo = "Danh sách liên hệ:\n"
        for (let i = 0; i < contactList.contact.length;i++){
            contactInfo += `Id: ${contactList.contact[i].id}\nName: ${contactList.contact[i].name}\nEmail: ${contactList.contact[i].email}\nPhone: ${contactList.contact[i].phone}\n`
        }
        alert(contactInfo);
        return;
    }
}

function findByPhone(contactList) {
    if (contactList.contact.length === 0) {
        alert("Danh sách chưa có thông tin nào");
        return;
    } else {
        let phone = prompt("Nhập số điện thoại để tìm thông tin:");
        for (let i = 0; i < contactList.contact.length; i++) {
            if (contactList.contact[i].phone === phone) {
                alert(`Id: ${contactList.contact[i].id}\nName: ${contactList.contact[i].name}\nEmail: ${contactList.contact[i].email}\nPhone: ${contactList.contact[i].phone}`);
                return;
            }
        }
        alert(`Không tìm thấy contact với sđt: ${phone}`);
        return;
    }
}

function UpdateContent(contactList) {
    if (contactList.contact.length === 0) {
        alert("Danh sách chưa có thông tin nào");
        return;
    } else {
        let id = parseInt(prompt("Nhập id để update:"));
        for (let i = 0; i < contactList.contact.length; i++) {
            if (contactList.contact[i].id === id) {
                contactList.contact[i].name = prompt(`Name: ${contactList.contact[i].name}\nNhập tên mới:`);
                contactList.contact[i].email = prompt(`Email: ${contactList.contact[i].email}\nNhập email mới`);
                contactList.contact[i].phone = prompt(`Phone: ${contactList.contact[i].phone}\nNhập sđt mới`);
                return;
            }
        }
        alert("Không tìm được id đã nhập");
        return;
    }
}

function deleteById(contactList) {
    if (contactList.contact.length === 0) {
        alert("Danh sách chưa có thông tin nào");
        return;
    } else {
        let id = parseInt(prompt("Nhập id để xóa:"));
        for (let i = 0; i < contactList.contact.length; i++) {
            if (contactList.contact[i].id === id) {
                contactList.contact.splice(i, 1);
                alert("Xóa thành công!");
                return;
            }
        }
        alert("Không tìm được id đã nhập");
        return;
    }
}


while (true) {
    let choice = parseInt(prompt(
        "1. Thêm đối tượng Contact vào danh sách liên hệ.\n" +
        "2. Hiển thị danh sách danh bạ.\n" +
        "3. Tìm kiếm thông tin Contact theo số điện thoại.\n" +
        "4. Cập nhật thông tin Contact(name, email, phone) theo id.\n" +
        "5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.\n" +
        "6. Thoát"
    ));

    switch (choice) {
        case 1:
            AddNewContact(contactList);
            break;
        case 2:
            ShowList(contactList);
            break;
        case 3:
            findByPhone(contactList);
            break;
        case 4:
            UpdateContent(contactList);
            break;
        case 5:
            deleteById(contactList);
            break;
        case 6:
            alert("Goodbye");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
    if (choice === 6) {
        break;
    }
}