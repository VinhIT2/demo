function getStatusClass(status) {
  if (status === "Đã giao") return "success";
  if (status === "Đang giao") return "warning";
  if (status === "Đã hủy") return "danger";
  return "neutral";
}

export default function ShipmentRow({ item, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{item.code}</td>
      <td>{item.receiver}</td>
      <td>{item.location}</td>
      <td>
        <span className={`status-badge ${getStatusClass(item.status)}`}>
          {item.status}
        </span>
      </td>
    </tr>
  );
}
