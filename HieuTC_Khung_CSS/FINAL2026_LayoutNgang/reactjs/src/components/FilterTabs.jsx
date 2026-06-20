const statuses = ["Tất cả", "Chờ lấy", "Đang giao", "Đã giao"];

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
