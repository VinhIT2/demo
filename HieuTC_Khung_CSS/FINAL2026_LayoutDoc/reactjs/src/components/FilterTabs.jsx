const statuses = ["Tất cả", "Sắp diễn ra", "Đang diễn ra", "Hoàn thành"];

export default function FilterTabs({ activeStatus, onChange }) {
  return (
    <div className="filter-tabs">
      {statuses.map((status) => (
        <button
          key={status}
          className={`filter-btn ${activeStatus === status ? "active" : ""}`}
          type="button"
          onClick={() => onChange(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
