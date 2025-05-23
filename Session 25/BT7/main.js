function capitalizeWords(str) {
    if (typeof str !== "string") {
        return "Dữ liệu không hợp lệ";
    }
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
console.log(capitalizeWords("hello WORLD"));  
console.log(capitalizeWords("rIKKei acaDEMy")); 
