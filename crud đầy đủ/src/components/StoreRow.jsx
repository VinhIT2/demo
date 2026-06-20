function StoreRow({ index, store, onEdit, onDelete }) {
  return (
    <tr className="align-middle">
      <td className="text-center text-muted">{index}</td>
      <td className="fw-semibold text-primary">{store.id}</td>
      <td>{store.name}</td>
      <td>{store.manager}</td>
      <td>{store.address}</td>
      <td className="text-center">
        <button
          className="btn btn-outline-warning btn-sm me-1"
          title="Edit"
          onClick={() => onEdit(store)}
        >
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          title="Delete"
          onClick={() => onDelete(store.id)}
        >
          <i className="bi bi-trash-fill"></i>
        </button>
      </td>
    </tr>
  );
}

export default StoreRow;
