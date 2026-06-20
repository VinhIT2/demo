import ShipmentRow from "./ShipmentRow.jsx";

export default function ShipmentTable({ items }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã đơn</th>
            <th>Người nhận</th>
            <th>Địa điểm</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td className="empty-cell" colSpan="5">Không có dữ liệu phù hợp</td>
            </tr>
          ) : (
            items.map((item, index) => (
              <ShipmentRow key={item.id} item={item} index={index} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
