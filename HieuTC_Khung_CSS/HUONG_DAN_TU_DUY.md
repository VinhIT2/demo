# Tư duy code giao diện CRUD dạng bảng

## 1. Đọc đề trong 2 phút

Trước khi code, chỉ cần trả lời 4 câu:

- Đối tượng chính là gì? Ví dụ: đơn vận chuyển, hoạt động, sản phẩm, task.
- Dữ liệu có những trường nào? Ví dụ: mã đơn, người nhận, địa điểm, trạng thái.
- Bố cục là ngang hay dọc? Ngang là bảng và form nằm cạnh nhau. Dọc là form nằm trên bảng.
- Có chức năng nào? Thường là hiển thị, thêm, xóa, tìm kiếm, lọc.

## 2. CSS nên đặt theo vai trò

Đừng đặt class theo đề như `.shipment-box` hay `.activity-table` quá sớm. Hãy đặt theo vai trò:

- `.app-header`: phần đầu trang.
- `.stats-grid`: cụm thống kê.
- `.main-grid`: vùng chính.
- `.layout-ngang`: chia 2 cột.
- `.layout-doc`: chia 1 cột.
- `.panel`: khung form hoặc bảng.
- `.crud-form`: form thêm mới.
- `.data-table`: bảng dữ liệu.
- `.status-badge`: nhãn trạng thái.

Khi đề đổi từ "đơn vận chuyển" sang "hoạt động ngoại khóa", CSS gần như giữ nguyên.

## 3. JS nên chia thành 5 hàm

Hầu hết bài CRUD bảng chỉ cần:

```js
renderStats();   // cập nhật số lượng
renderTable();   // vẽ bảng
validateForm();  // kiểm tra nhập liệu
deleteItem(id);  // xóa dòng
renderApp();     // gọi lại renderStats + renderTable
```

Tư duy là: dữ liệu thay đổi trước, giao diện render lại sau.

```txt
Người dùng submit form
-> tạo object mới
-> push vào mảng
-> renderApp()
```

```txt
Người dùng bấm xóa
-> filter bỏ object có id cần xóa
-> renderApp()
```

## 4. Đổi từ LayoutNgang sang LayoutDoc

Chỉ đổi class ở vùng chính:

```html
<main class="main-grid layout-ngang">
```

hoặc:

```html
<main class="main-grid layout-doc">
```

Layout ngang:

```css
.layout-ngang {
  grid-template-columns: 2fr 1fr;
}
```

Layout dọc:

```css
.layout-doc {
  grid-template-columns: 1fr;
}
```

Đây là chỗ bạn nói "chỉ thay class CSS một chút" - đúng nhất là thay ở layout, còn form/table/badge/nút giữ nguyên.

## 5. Cách đổi đề nhanh

Nếu đề là sản phẩm:

- Đổi `shipments` thành `products`.
- Đổi field: `name`, `category`, `price`, `status`.
- Đổi cột bảng.
- Đổi input form.
- Giữ nguyên `.panel`, `.form-control`, `.data-table`, `.status-badge`.

Nếu đề là task:

- Đổi `shipments` thành `tasks`.
- Field có thể là `title`, `priority`, `status`.
- Badge dùng cho priority hoặc status.
- Nếu giao diện là list card thay vì table, vẫn giữ tư duy `renderList()`.

## 6. data.js và data.json

Với `data.js`, nhúng trước `app.js`:

```html
<script src="./data/data.js"></script>
<script src="./js/app.js"></script>
```

Với `data.json`, dùng `fetch`:

```js
let items = [];

async function loadData() {
  const response = await fetch("./data/data.json");
  items = await response.json();
  renderApp();
}

loadData();
```

Trong phòng thi HTML thuần, `data.js` ít lỗi hơn. Nếu đề bắt buộc `data.json`, nhớ chạy bằng Live Server hoặc server local.
