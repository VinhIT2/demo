export default function Header() {
  return (
    <header className="app-header">
      <div className="brand-block">
        <div className="brand-logo">TLU</div>
        <div>
          <h1 className="brand-title">Quản lý hoạt động ngoại khóa</h1>
          <p className="brand-desc">Đăng ký và theo dõi hoạt động sinh viên</p>
        </div>
      </div>

      <nav className="nav-pills">
        <a className="active" href="#">Hoạt động</a>
        <a href="#">Sinh viên</a>
        <a href="#">Lịch trình</a>
        <a href="#">Thống kê</a>
      </nav>
    </header>
  );
}
