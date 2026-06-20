export default function Statistics({ items }) {
  const total = items.length;
  const upcoming = items.filter((item) => item.status === "Sắp diễn ra").length;
  const done = items.filter((item) => item.status === "Hoàn thành").length;

  return (
    <section className="stats-grid">
      <article className="stat-card">
        <span className="stat-value">{total}</span>
        <span className="stat-label">Tổng hoạt động</span>
      </article>
      <article className="stat-card">
        <span className="stat-value">{upcoming}</span>
        <span className="stat-label">Sắp diễn ra</span>
      </article>
      <article className="stat-card">
        <span className="stat-value">{done}</span>
        <span className="stat-label">Hoàn thành</span>
      </article>
    </section>
  );
}
