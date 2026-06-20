import { useState, useEffect } from "react";

const EMPTY = { id: "", name: "", manager: "", address: "" };

function StoreForm({ show, onClose, onSave, editData }) {
  const [form, setForm]     = useState(EMPTY);
  const [errors, setErrors] = useState({});

  // Reset / điền sẵn data mỗi khi modal mở
  useEffect(() => {
    if (show) {
      setForm(editData ? { ...editData } : EMPTY);
      setErrors({});
    }
  }, [show, editData]);

  // Controlled input – dùng computed property key
  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  // Validate theo yêu cầu đề
  function validate() {
    const errs = {};
    if (!form.id.trim())      errs.id = "Store ID is required.";
    if (!form.name.trim())    errs.name = "Store Name is required.";

    if (!form.manager.trim()) {
      errs.manager = "Manager is required.";
    } else if (form.manager.trim().length > 30) {
      errs.manager = "Manager must not exceed 30 characters.";
    }

    if (!form.address.trim()) {
      errs.address = "Address is required.";
    } else if (form.address.trim().length > 50) {
      errs.address = "Address must not exceed 50 characters.";
    }

    return errs;
  }

  function handleSave() {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    onSave({ ...form });
  }

  if (!show) return null;

  const isEdit = !!editData; // biến thành true hoặc false

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        style={{ zIndex: 1040 }}
        onClick={onClose}
      />

      {/* Modal dialog */}
      <div className="modal fade show d-block" style={{ zIndex: 1050 }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow-lg">

            {/* Header */}
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title fw-bold">
                <i className={`bi ${isEdit ? "bi-pencil-square" : "bi-plus-circle"} me-2`}></i>
                {isEdit ? "Edit Store" : "Add New Store"}
              </h5>
              <button className="btn-close btn-close-white" onClick={onClose} />
            </div>

            {/* Body */}
            <div className="modal-body p-4">

              {/* Store ID */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Store ID</label>
                <input
                  type="text"
                  className={`form-control ${errors.id ? "is-invalid" : ""}`}
                  name="id"
                  placeholder="e.g. ST006"
                  value={form.id}
                  onChange={handleChange}
                  disabled={isEdit}
                />
                {errors.id && <div className="invalid-feedback">{errors.id}</div>}
              </div>

              {/* Store Name */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Store Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  name="name"
                  placeholder="e.g. Zeta Shop"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              {/* Manager */}
              <div className="mb-3">
                <label className="form-label fw-semibold">Manager</label>
                <input
                  type="text"
                  className={`form-control ${errors.manager ? "is-invalid" : ""}`}
                  name="manager"
                  placeholder="Max 30 characters"
                  value={form.manager}
                  onChange={handleChange}
                />
                <div className="d-flex justify-content-between mt-1">
                  <div>
                    {errors.manager && (
                      <span className="text-danger small">{errors.manager}</span>
                    )}
                  </div>
                  <small className={form.manager.length > 30 ? "text-danger" : "text-muted"}>
                    {form.manager.length}/30
                  </small>
                </div>
              </div>

              {/* Address */}
              <div className="mb-1">
                <label className="form-label fw-semibold">Address</label>
                <input
                  type="text"
                  className={`form-control ${errors.address ? "is-invalid" : ""}`}
                  name="address"
                  placeholder="Max 50 characters"
                  value={form.address}
                  onChange={handleChange}
                />
                <div className="d-flex justify-content-between mt-1">
                  <div>
                    {errors.address && (
                      <span className="text-danger small">{errors.address}</span>
                    )}
                  </div>
                  <small className={form.address.length > 50 ? "text-danger" : "text-muted"}>
                    {form.address.length}/50
                  </small>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={onClose}>
                <i className="bi bi-x-lg me-1"></i>Cancel
              </button>
              <button className="btn btn-dark" onClick={handleSave}>
                <i className="bi bi-check-lg me-1"></i>
                {isEdit ? "Save Changes" : "Add Store"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default StoreForm;
