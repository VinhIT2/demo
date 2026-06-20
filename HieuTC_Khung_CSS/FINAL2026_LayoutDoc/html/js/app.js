let itemList = [];
let currentStatus = "Tất cả";
let searchText = "";

const tableBody = document.querySelector("#tableBody");
const form = document.querySelector("#itemForm");
const nameInput = document.querySelector("#nameInput");
const nameError = document.querySelector("#nameError");
const clubSelect = document.querySelector("#clubSelect");
const statusSelect = document.querySelector("#statusSelect");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const totalCount = document.querySelector("#totalCount");
const upcomingCount = document.querySelector("#upcomingCount");
const doneCount = document.querySelector("#doneCount");

function getStatusClass(status) {
  if (status === "Hoàn thành") return "success";
  if (status === "Đang diễn ra") return "warning";
  if (status === "Đã hủy") return "danger";
  return "neutral";
}

async function loadData() {
  const response = await fetch("./data/data.json");
  itemList = await response.json();
  renderApp();
}

function getVisibleItems() {
  const keyword = searchText.toLowerCase();

  return itemList.filter((item) => {
    const matchStatus = currentStatus === "Tất cả" || item.status === currentStatus;
    const matchSearch =
      item.name.toLowerCase().includes(keyword) ||
      item.club.toLowerCase().includes(keyword);

    return matchStatus && matchSearch;
  });
}

function renderStats() {
  totalCount.textContent = itemList.length;
  upcomingCount.textContent = itemList.filter((item) => item.status === "Sắp diễn ra").length;
  doneCount.textContent = itemList.filter((item) => item.status === "Hoàn thành").length;
}

function renderTable() {
  const visibleItems = getVisibleItems();

  if (visibleItems.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td class="empty-cell" colspan="5">Không có dữ liệu phù hợp</td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = visibleItems.map((item, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.club}</td>
      <td>${item.method}</td>
      <td><span class="status-badge ${getStatusClass(item.status)}">${item.status}</span></td>
    </tr>
  `).join(""); // chuyển mảng thành chuỗi (nối chuỗi qua ',' trong mảng bằng chuỗi rỗng "")
}

function renderApp() {
  renderStats();
  renderTable();
}

function validateForm() {
  const name = nameInput.value.trim();
  nameError.textContent = "";

  if (!name) {
    nameError.textContent = "Vui lòng nhập tên hoạt động";
    return false;
  }

  if (name.length > 100) {
    nameError.textContent = "Tên hoạt động không quá 100 ký tự";
    return false;
  }

  if (!clubSelect.value) {
    alert("Vui lòng chọn câu lạc bộ");
    return false;
  }

  return true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateForm()) return;

  const checkedMethod = document.querySelector("input[name='method']:checked");
  const newItem = {
    id: Date.now(),
    name: nameInput.value.trim(),
    club: clubSelect.value,
    method: checkedMethod.value,
    status: statusSelect.value
  };

  itemList.push(newItem);
  form.reset();
  renderApp();
});

searchInput.addEventListener("input", (event) => {
  searchText = event.target.value.trim();
  renderTable();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    currentStatus = button.dataset.status;
    renderTable();
  });
});

loadData();
