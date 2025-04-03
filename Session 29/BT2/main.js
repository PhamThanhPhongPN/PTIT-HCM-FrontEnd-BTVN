let productList = {
    products: [],

    addProduct(id, name, price, category, quantity) {
        this.products.push({ id, name, price, category, quantity });
    }
}

function AddNewProduct(productList) {
    let id = parseInt(prompt("Nhập id:"));
    if (productList.products.some(product => product.id === id)) {
        alert("Đã có id này rồi");
        return;
    } else {
        let name = prompt("Nhập tên sản phẩm:");
        let price = parseFloat(prompt("Nhập giá sản phẩm:"));
        let category = prompt("Nhập danh mục sản phẩm:");
        let quantity = parseInt(prompt("Nhập số lượng sản phẩm:"));
        productList.addProduct(id, name, price, category, quantity);
        return;
    }
}

function ShowList(productList) {
    if (productList.products.length === 0) {
        alert("Danh sách sản phẩm chưa có thông tin nào");
        return;
    } else {
        let productInfo = "Danh sách sản phẩm:\n";
        for (let i = 0; i < productList.products.length; i++) {
            productInfo += `Id: ${productList.products[i].id}\nName: ${productList.products[i].name}\nPrice: ${productList.products[i].price}\nCategory: ${productList.products[i].category}\nQuantity: ${productList.products[i].quantity}\n`;
        }
        alert(productInfo);
        return;
    }
}

function ShowProductById(productList) {
    let id = parseInt(prompt("Nhập id sản phẩm để xem chi tiết:"));
    for (let i = 0; i < productList.products.length; i++) {
        if (productList.products[i].id === id) {
            alert(`Id: ${productList.products[i].id}\nName: ${productList.products[i].name}\nPrice: ${productList.products[i].price}\nCategory: ${productList.products[i].category}\nQuantity: ${productList.products[i].quantity}`);
            return;
        }
    }
    alert("Không tìm được sản phẩm với id đã nhập");
}

function UpdateProduct(productList) {
    let id = parseInt(prompt("Nhập id để cập nhật sản phẩm:"));
    for (let i = 0; i < productList.products.length; i++) {
        if (productList.products[i].id === id) {
            productList.products[i].name = prompt(`Name: ${productList.products[i].name}\nNhập tên mới:`);
            productList.products[i].price = parseFloat(prompt(`Price: ${productList.products[i].price}\nNhập giá mới:`));
            productList.products[i].category = prompt(`Category: ${productList.products[i].category}\nNhập danh mục mới:`);
            productList.products[i].quantity = parseInt(prompt(`Quantity: ${productList.products[i].quantity}\nNhập số lượng mới:`));
            return;
        }
    }
    alert("Không tìm được id sản phẩm đã nhập");
}

function DeleteProductById(productList) {
    let id = parseInt(prompt("Nhập id để xóa sản phẩm:"));
    for (let i = 0; i < productList.products.length; i++) {
        if (productList.products[i].id === id) {
            productList.products.splice(i, 1);
            alert("Xóa thành công!");
            return;
        }
    }
    alert("Không tìm được id đã nhập");
}

function FilterByPriceRange(productList) {
    let minPrice = parseFloat(prompt("Nhập giá thấp nhất:"));
    let maxPrice = parseFloat(prompt("Nhập giá cao nhất:"));
    let filteredProducts = productList.products.filter(product => product.price >= minPrice && product.price <= maxPrice);

    if (filteredProducts.length === 0) {
        alert("Không tìm thấy sản phẩm nào trong khoảng giá đã nhập");
        return;
    } else {
        let productInfo = "Danh sách sản phẩm trong khoảng giá:\n";
        for (let i = 0; i < filteredProducts.length; i++) {
            productInfo += `Id: ${filteredProducts[i].id}\nName: ${filteredProducts[i].name}\nPrice: ${filteredProducts[i].price}\nCategory: ${filteredProducts[i].category}\nQuantity: ${filteredProducts[i].quantity}\n`;
        }
        alert(productInfo);
        return;
    }
}

while (true) {
    let choice = parseInt(prompt(
        "1. Thêm sản phẩm vào danh sách.\n" +
        "2. Hiển thị tất cả sản phẩm.\n" +
        "3. Hiển thị chi tiết sản phẩm theo id.\n" +
        "4. Cập nhật thông tin sản phẩm theo id.\n" +
        "5. Xóa sản phẩm theo id.\n" +
        "6. Lọc sản phẩm theo khoảng giá.\n" +
        "7. Thoát"
    ));

    switch (choice) {
        case 1:
            AddNewProduct(productList);
            break;
        case 2:
            ShowList(productList);
            break;
        case 3:
            ShowProductById(productList);
            break;
        case 4:
            UpdateProduct(productList);
            break;
        case 5:
            DeleteProductById(productList);
            break;
        case 6:
            FilterByPriceRange(productList);
            break;
        case 7:
            alert("Goodbye!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
    if (choice === 7) {
        break;
    }
}
