let itemList = [...items];
let currentStatus = "Tất cả";
let searchText = "";

const tableBody = document.querySelector("#tableBody");
const form = document.querySelector("#itemForm");
const receiverInput = document.querySelector("#receiverInput");
const receiverError = document.querySelector("#receiverError");
const locationSelect = document.querySelector("#locationSelect");
const statusSelect = document.querySelector("#statusSelect");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const totalCount = document.querySelector("#totalCount");
const shippingCount = document.querySelector("#shippingCount");
const doneCount = document.querySelector("#doneCount");

function getStatusClass(status) {
  if (status === "Đã giao") return "success";
  if (status === "Đang giao") return "warning";
  if (status === "Đã hủy") return "danger";
  return "neutral";
}

function createCode() {
  const nextNumber = itemList.length + 1;
  return `SH${String(nextNumber).padStart(3, "0")}`;
}

function getVisibleItems() {
  const keyword = searchText.toLowerCase();

  return itemList.filter((item) => {
    const matchStatus = currentStatus === "Tất cả" || item.status === currentStatus;
    const matchSearch =
      item.code.toLowerCase().includes(keyword) ||
      item.receiver.toLowerCase().includes(keyword);

    return matchStatus && matchSearch;
  });
}

function renderStats() {
  totalCount.textContent = itemList.length;
  shippingCount.textContent = itemList.filter((item) => item.status === "Đang giao").length;
  doneCount.textContent = itemList.filter((item) => item.status === "Đã giao").length;
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
      <td>${item.code}</td>
      <td>${item.receiver}</td>
      <td>${item.location}</td>
      <td><span class="status-badge ${getStatusClass(item.status)}">${item.status}</span></td>
    </tr>
  `).join("");
}

function renderApp() {
  renderStats();
  renderTable();
}

function validateForm() {
  const receiver = receiverInput.value.trim();
  receiverError.textContent = "";

  if (!receiver) {
    receiverError.textContent = "Vui lòng nhập người nhận";
    return false;
  }

  if (receiver.length > 100) {
    receiverError.textContent = "Tên người nhận không quá 100 ký tự";
    return false;
  }

  if (!locationSelect.value) {
    alert("Vui lòng chọn địa điểm");
    return false;
  }

  return true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateForm()) return;

  const checkedType = document.querySelector("input[name='type']:checked");
  const newItem = {
    id: Date.now(),
    code: createCode(),
    receiver: receiverInput.value.trim(),
    location: locationSelect.value,
    type: checkedType.value,
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

renderApp();
