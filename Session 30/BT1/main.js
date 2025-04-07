let productList = {
    products: [
        { id: 1, name: "mèn mén", price: 20000, quantity: 20, category: "món ăn dân tộc Mông" },
        { id: 2, name: "mứt", price: 80000, quantity: 21, category: "món ăn dân tộc Kinh" },
        { id: 3, name: "cơm lam", price: 40000, quantity: 15, category: "món ăn dân tộc Mông" },
        { id: 4, name: "bánh đậu xanh", price: 60000, quantity: 30, category: "món ăn dân tộc Kinh" }
    ],
    cart: [],
    
    addProduct(id, name, price, category, quantity) {
        this.products.push({ id, name, price, category, quantity });
    },

    findProductById(id) {
        return this.products.find(product => product.id === id);
    }
};


function ShowProductsByCategory(productList) {
    let category = prompt("Nhập tên danh mục:");
    let filteredProducts = productList.products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        alert("Không tìm thấy sản phẩm trong danh mục này");
        return;
    } else {
        let productInfo = `Danh sách sản phẩm trong danh mục '${category}':\n`;
        for (let product of filteredProducts) {
            productInfo += `Id: ${product.id}\nName: ${product.name}\nPrice: ${product.price}\nQuantity: ${product.quantity}\n`;
        }
        alert(productInfo);
        return;
    }
}

function BuyProduct(productList) {
    let id = parseInt(prompt("Nhập id sản phẩm muốn mua:"));
    let product = productList.findProductById(id);

    if (!product) {
        alert("Sản phẩm không có trong cửa hàng");
        return;
    }

    let quantity = parseInt(prompt(`Nhập số lượng sản phẩm muốn mua (Số lượng còn lại: ${product.quantity}):`));

    if (quantity > product.quantity) {
        alert("Số lượng sản phẩm trong cửa hàng không đủ");
        return;
    } else if (quantity === 0) {
        alert("Sản phẩm đã hết hàng!");
        return;
    }

    product.quantity -= quantity;
    productList.cart.push({ id: product.id, name: product.name, price: product.price, quantity });

    alert("Mua thành công!");
}

function SortProductsByPrice(productList) {
    let choice = parseInt(prompt("Chọn cách sắp xếp: 1. Tăng dần 2. Giảm dần"));
    let sortedProducts = [...productList.products];

    if (choice === 1) {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (choice === 2) {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else {
        alert("Lựa chọn không hợp lệ!");
        return;
    }

    let productInfo = "Danh sách sản phẩm sau khi sắp xếp:\n";
    for (let product of sortedProducts) {
        productInfo += `Id: ${product.id}\nName: ${product.name}\nPrice: ${product.price}\nQuantity: ${product.quantity}\n`;
    }
    alert(productInfo);
}

function CalculateTotalPrice(productList) {
    if (productList.cart.length === 0) {
        alert("Giỏ hàng đang trống!");
        return;
    }

    let totalPrice = productList.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    alert(`Tổng số tiền thanh toán: ${totalPrice}`);
}

while (true) {
    let choice = parseInt(prompt(
        "1. Hiển thị sản phẩm theo danh mục.\n" +
        "2. Mua sản phẩm.\n" +
        "3. Sắp xếp sản phẩm theo giá.\n" +
        "4. Tính tổng tiền thanh toán.\n" +
        "5. Thoát."
    ));

    switch (choice) {
        case 1:
            ShowProductsByCategory(productList);
            break;
        case 2:
            BuyProduct(productList);
            break;
        case 3:
            SortProductsByPrice(productList);
            break;
        case 4:
            CalculateTotalPrice(productList);
            break;
        case 5:
            alert("Goodbye!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }

    if (choice === 5) {
        break;
    }
}
