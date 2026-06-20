# CSS mẫu chung cho đề CRUD

File chính:

```txt
css/exam-crud.css
```

## Các dạng đề đã có mẫu

- `examples/01-form-trai-table-phai.html`: sản phẩm, khách hàng, sinh viên.
- `examples/02-table-trai-form-phai.html`: đơn vận chuyển kiểu HieuTC layout ngang.
- `examples/03-form-tren-table-duoi.html`: hoạt động ngoại khóa kiểu HieuTC layout dọc.
- `examples/04-toolbar-table-store.html`: Store Management cũ, có navbar, toolbar, action buttons.
- `examples/05-task-list-card.html`: Task List dạng card/list.
- `examples/06-popup-form.html`: form pop-up/modal khi bấm Add.

## Công thức chọn layout

Form bên trái, bảng bên phải:

```html
<main class="main-grid layout-two">
```

Bảng bên trái, form bên phải:

```html
<main class="main-grid layout-form-right">
```

Form trên, bảng dưới:

```html
<main class="main-grid layout-vertical">
```

Chỉ toolbar + bảng:

```html
<main class="main-grid layout-toolbar-table">
```

Task dạng card/list:

```html
<section class="list-stack">
  <article class="list-card">...</article>
</section>
```

Form pop-up:

```html
<div id="itemModal" class="modal-backdrop">
  <section class="modal-dialog">
    <header class="modal-header">
      <h2 class="modal-title">Thêm mới</h2>
      <button class="modal-close" type="button">×</button>
    </header>

    <form>
      <div class="modal-body">
        <div class="form-group">
          <label>Tên</label>
          <input class="form-control">
        </div>
      </div>

      <footer class="modal-footer">
        <button class="btn btn-light" type="button">Hủy</button>
        <button class="btn btn-primary" type="submit">Thêm</button>
      </footer>
    </form>
  </section>
</div>
```

Mở popup bằng cách thêm class `show`:

```js
modal.classList.add("show");
```

Đóng popup bằng cách bỏ class `show`:

```js
modal.classList.remove("show");
```

## Nhóm class cần nhớ khi đi thi

Khung trang:

```txt
app-shell, app-header, topbar, main-grid, panel
```

Layout:

```txt
layout-two, layout-form-right, layout-vertical, layout-toolbar-table
```

Form:

```txt
crud-form, form-grid, form-group, form-control, choice-row, form-actions
```

Bảng:

```txt
toolbar, filter-tabs, table-wrap, data-table, action-group
```

Nút và trạng thái:

```txt
btn, btn-primary, btn-dark, btn-light, btn-danger
filter-btn, icon-btn
badge, status-badge
success, warning, danger, info, neutral
```

## Tư duy sửa theo đề

Không sửa CSS trước. Làm theo thứ tự:

1. Chọn layout.
2. Chọn header: `.app-header` hoặc `.topbar`.
3. Viết form theo field đề bài.
4. Viết table theo cột đề bài.
5. Dùng badge cho trạng thái/priority.
6. JS render dữ liệu vào `tbody` hoặc `.list-stack`.

Nếu đề đổi chủ đề, ví dụ từ sản phẩm sang hoạt động, CSS vẫn giữ nguyên. Bạn chỉ đổi HTML field, data và JS render.
