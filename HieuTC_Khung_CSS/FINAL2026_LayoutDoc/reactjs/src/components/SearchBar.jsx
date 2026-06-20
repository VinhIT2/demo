export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="form-control search-control"
      type="search"
      placeholder="Tìm tên hoạt động, CLB..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
