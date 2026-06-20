export default function Statistics({ items }) {
  const total = items.length;
  const shipping = items.filter((item) => item.status === "Đang giao").length;
  const done = items.filter((item) => item.status === "Đã giao").length;

  return (
    <section className="stats-grid">
      <article className="stat-card">
        <span className="stat-value">{total}</span>
        <span className="stat-label">Tổng đơn</span>
      </article>
      <article className="stat-card">
        <span className="stat-value">{shipping}</span>
        <span className="stat-label">Đang giao</span>
      </article>
      <article className="stat-card">
        <span className="stat-value">{done}</span>
        <span className="stat-label">Đã giao</span>
      </article>
    </section>
  );
}
