function getStatusClass(status) {
  if (status === "Hoàn thành") return "success";
  if (status === "Đang diễn ra") return "warning";
  if (status === "Đã hủy") return "danger";
  return "neutral";
}

export default function ActivityRow({ item, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.name}</td>
      <td>{item.club}</td>
      <td>{item.method}</td>
      <td>
        <span className={`status-badge ${getStatusClass(item.status)}`}>
          {item.status}
        </span>
      </td>
    </tr>
  );
}
