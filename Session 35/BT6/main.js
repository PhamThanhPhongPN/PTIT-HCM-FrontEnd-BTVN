document.addEventListener("DOMContentLoaded", () => {
    const statusFilter = document.getElementById("statusFilter");
    const searchInput = document.getElementById("searchInput");
    const tableBody = document.getElementById("categoryTable");
  
    const categories = [
      { id: "DM001", name: "Quần áo", status: "active" },
      { id: "DM002", name: "Kính mắt", status: "inactive" },
      { id: "DM003", name: "Giày dép", status: "active" },
      { id: "DM004", name: "Thời trang nam", status: "inactive" },
      { id: "DM005", name: "Thời trang nữ", status: "inactive" },
      { id: "DM006", name: "Hoa quả", status: "inactive" },
      { id: "DM007", name: "Rau", status: "active" },
      { id: "MD008", name: "Điện thoại", status: "inactive" },
    ];
  
    function getStatusLabel(status) {
      return status === "active"
        ? `<span class="status active-status"><i class="fas fa-circle me-1"></i>Đang hoạt động</span>`
        : `<span class="status inactive-status"><i class="fas fa-circle me-1"></i>Ngừng hoạt động</span>`;
    }
  
    function renderTable(data) {
      tableBody.innerHTML = "";
      data.forEach((cat) => {
        const row = document.createElement("tr");
        row.setAttribute("data-status", cat.status);
        row.innerHTML = `
          <td>${cat.id}</td>
          <td>${cat.name}</td>
          <td>${getStatusLabel(cat.status)}</td>
          <td>
            <i class="fas fa-trash text-danger me-2" role="button"></i>
            <i class="fas fa-pen text-warning" role="button"></i>
          </td>
        `;
        tableBody.appendChild(row);
      });
    }
  
    function filterAndSearch() {
      const selectedStatus = statusFilter.value;
      const keyword = searchInput.value.toLowerCase();
  
      const filtered = categories.filter((cat) => {
        const matchStatus = selectedStatus === "all" || cat.status === selectedStatus;
        const matchKeyword = cat.name.toLowerCase().includes(keyword);
        return matchStatus && matchKeyword;
      });
  
      renderTable(filtered);
    }
  
    // Initial render
    renderTable(categories);
  
    // Bind filters
    statusFilter.addEventListener("change", filterAndSearch);
    searchInput.addEventListener("input", filterAndSearch);
  });
  