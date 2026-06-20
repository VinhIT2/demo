import { useState } from "react";
import initialData from "./data.js";
import Header from "./components/Header.jsx";
import StoreTable from "./components/StoreTable.jsx";
import StoreForm from "./components/StoreForm.jsx";

function App() {
  const [stores, setStores]     = useState(initialData);
  const [showForm, setShowForm] = useState(false);
  const [editStore, setEditStore] = useState(null); // null = Add, object = Edit

  // ── Mở modal Add ──────────────────────────────────────────
  function handleOpenAdd() {
    setEditStore(null);
    setShowForm(true);
  }

  // ── Mở modal Edit ─────────────────────────────────────────
  function handleOpenEdit(store) {
    setEditStore(store);
    setShowForm(true);
  }

  // ── Đóng modal ────────────────────────────────────────────
  function handleClose() {
    setShowForm(false);
    setEditStore(null);
  }

  // ── Lưu (Add hoặc Edit) ───────────────────────────────────
  function handleSave(formData) {
    if (editStore) {
      // Edit: thay thế bản ghi cũ
      setStores((prev) =>
        prev.map((s) => (s.id === formData.id ? formData : s))
      );
    } else {
      // Add: thêm vào cuối
      setStores((prev) => [...prev, formData]);
    }
    handleClose();
  }

  // ── Xoá ───────────────────────────────────────────────────
  function handleDelete(id) {
    if (!window.confirm(`Delete store ${id}?`)) return;
    setStores((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div className="min-vh-100 bg-light">
      <Header />

      <div className="container py-4">
        <StoreTable
          stores={stores}
          onAdd={handleOpenAdd}
          onEdit={handleOpenEdit}
          onDelete={handleDelete}
        />
      </div>

      <StoreForm
        show={showForm}
        onClose={handleClose}
        onSave={handleSave}
        editData={editStore}
      />
    </div>
  );
}

export default App;
