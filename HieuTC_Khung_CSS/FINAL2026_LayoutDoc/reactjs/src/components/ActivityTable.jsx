import ActivityRow from "./ActivityRow.jsx";

export default function ActivityTable({ items }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Hoạt động</th>
            <th>Câu lạc bộ</th>
            <th>Hình thức</th>
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
              <ActivityRow key={item.id} item={item} index={index} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
