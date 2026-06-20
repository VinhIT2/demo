export default function Header() {
  return (
    <header className="app-header">
      <div className="brand-block">
        <div className="brand-logo">TLU</div>
        <div>
          <h1 className="brand-title">Quản lý đơn vận chuyển</h1>
          <p className="brand-desc">Theo dõi và xử lý đơn giao hàng</p>
        </div>
      </div>

      <nav className="nav-pills">
        <a className="active" href="#">Đơn hàng</a>
        <a href="#">Đối tác</a>
        <a href="#">Theo dõi</a>
        <a href="#">Báo cáo</a>
      </nav>
    </header>
  );
}
