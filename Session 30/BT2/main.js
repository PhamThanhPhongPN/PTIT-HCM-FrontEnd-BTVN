let bookList = {
    books: [],
    cart: [],

    addBook(id, name, price, quantity, category) {
        this.books.push({ id, name, price, quantity, category });
    },

    findBookById(id) {
        return this.books.find(book => book.id === id);
    },

    findBookByName(name) {
        return this.books.filter(book => book.name.toLowerCase().includes(name.toLowerCase()));
    }
};

function ShowBooksByCategory(bookList) {
    let category = prompt("Nhập tên thể loại:");
    let filteredBooks = bookList.books.filter(book => book.category === category);

    if (filteredBooks.length === 0) {
        alert("Không tìm thấy sách trong thể loại này");
        return;
    } else {
        let bookInfo = `Danh sách sách trong thể loại '${category}':\n`;
        for (let book of filteredBooks) {
            bookInfo += `Id: ${book.id}\nName: ${book.name}\nPrice: ${book.price}\nQuantity: ${book.quantity}\n`;
        }
        alert(bookInfo);
        return;
    }
}

function AddBook(bookList) {
    let id = parseInt(prompt("Nhập id sách:"));
    let name = prompt("Nhập tên sách:");
    let price = parseFloat(prompt("Nhập giá sách:"));
    let quantity = parseInt(prompt("Nhập số lượng sách:"));
    let category = prompt("Nhập thể loại sách:");
    bookList.addBook(id, name, price, quantity, category);
    alert("Sách đã được thêm vào kho!");
}

function SearchBook(bookList) {
    let choice = prompt("Tìm kiếm theo: 1. ID 2. Tên sách");
    if (choice === "1") {
        let id = parseInt(prompt("Nhập ID sách:"));
        let book = bookList.findBookById(id);
        if (book) {
            alert(`Thông tin sách:\nId: ${book.id}\nName: ${book.name}\nPrice: ${book.price}\nQuantity: ${book.quantity}\nCategory: ${book.category}`);
        } else {
            alert("Không tìm thấy sách với ID này!");
        }
    } else if (choice === "2") {
        let name = prompt("Nhập tên sách:");
        let books = bookList.findBookByName(name);
        if (books.length > 0) {
            let bookInfo = "Kết quả tìm kiếm:\n";
            for (let book of books) {
                bookInfo += `Id: ${book.id}\nName: ${book.name}\nPrice: ${book.price}\nQuantity: ${book.quantity}\nCategory: ${book.category}\n`;
            }
            alert(bookInfo);
        } else {
            alert("Không tìm thấy sách với tên này!");
        }
    } else {
        alert("Lựa chọn không hợp lệ!");
    }
}

function BuyBook(bookList) {
    let id = parseInt(prompt("Nhập id sách muốn mua:"));
    let book = bookList.findBookById(id);

    if (!book) {
        alert("Sách không có trong kho");
        return;
    }

    let quantity = parseInt(prompt(`Nhập số lượng sách muốn mua (Số lượng còn lại: ${book.quantity}):`));

    if (quantity > book.quantity) {
        alert("Số lượng sách trong kho không đủ");
        return;
    } else if (quantity === 0) {
        alert("Sách đã hết hàng!");
        return;
    }

    book.quantity -= quantity;
    bookList.cart.push({ id: book.id, name: book.name, price: book.price, quantity });

    alert("Mua thành công!");
}

function SortBooksByPrice(bookList) {
    let choice = parseInt(prompt("Chọn cách sắp xếp: 1. Tăng dần 2. Giảm dần"));
    let sortedBooks = [...bookList.books];

    if (choice === 1) {
        sortedBooks.sort((a, b) => a.price - b.price);
    } else if (choice === 2) {
        sortedBooks.sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }

    let bookInfo = "Danh sách sách sau khi sắp xếp:\n";
    for (let book of sortedBooks) {
        bookInfo += `Id: ${book.id}\nName: ${book.name}\nPrice: ${book.price}\nQuantity: ${book.quantity}\nCategory: ${book.category}\n`;
    }
    alert(bookInfo);
}

function CalculateTotal(bookList) {
    if (bookList.cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    let totalBooks = bookList.cart.reduce((sum, item) => sum + item.quantity, 0);
    let totalPrice = bookList.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Tổng số lượng sách đã mua: ${totalBooks}\nTổng số tiền thanh toán: ${totalPrice}`);
}

function ShowTotalBooks(bookList) {
    let totalBooks = bookList.books.reduce((sum, book) => sum + book.quantity, 0);
    alert(`Tổng số lượng sách trong kho: ${totalBooks}`);
}

while (true) {
    let choice = parseInt(prompt(
        "1. Hiển thị sách theo thể loại.\n" +
        "2. Thêm sách mới vào kho.\n" +
        "3. Tìm kiếm sách theo tên hoặc ID.\n" +
        "4. Mua sách.\n" +
        "5. Sắp xếp sách theo giá.\n" +
        "6. Tính tổng số lượng sách đã mua và tổng tiền thanh toán.\n" +
        "7. Hiển thị tổng số lượng sách trong kho.\n" +
        "8. Thoát."
    ));

    switch (choice) {
        case 1:
            ShowBooksByCategory(bookList);
            break;
        case 2:
            AddBook(bookList);
            break;
        case 3:
            SearchBook(bookList);
            break;
        case 4:
            BuyBook(bookList);
            break;
        case 5:
            SortBooksByPrice(bookList);
            break;
        case 6:
            CalculateTotal(bookList);
            break;
        case 7:
            ShowTotalBooks(bookList);
            break;
        case 8:
            alert("Goodbye!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }

    if (choice === 8) {
        break;
    }
}
