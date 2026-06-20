export default function SearchBar({ value, onChange }) {
  return (
    <input
      className="form-control search-control"
      type="search"
      placeholder="Tìm mã đơn, người nhận..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
