import StoreRow from "./StoreRow.jsx";

function StoreTable({ stores, onAdd, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm">
      {/* Card header */}
      <div className="card-header bg-dark text-white d-flex justify-content-between align-items-center py-3">
        <h5 className="mb-0 fw-bold">
          <i className="bi bi-table me-2"></i>
          Store List
          <span className="badge bg-secondary ms-2">{stores.length}</span>
        </h5>
        <button className="btn btn-light btn-sm fw-semibold" onClick={onAdd}>
          <i className="bi bi-plus-lg me-1"></i>Add Store
        </button>
      </div>

      {/* Table */}
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover table-bordered mb-0">
            <thead className="table-dark text-center">
              <tr>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "12%" }}>Store ID</th>
                <th style={{ width: "22%" }}>Store Name</th>
                <th style={{ width: "20%" }}>Manager</th>
                <th>Address</th>
                <th style={{ width: "13%" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {stores.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center text-muted py-5">
                    <i className="bi bi-inbox fs-3 d-block mb-2"></i>
                    No stores found. Click <strong>Add Store</strong> to get started.
                  </td>
                </tr>
              ) : (
                stores.map((store, index) => (
                  <StoreRow
                    key={store.id}
                    index={index + 1}
                    store={store}
                    onEdit={onEdit}
                    onDelete={onDelete}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StoreTable;
