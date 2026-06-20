import { useState } from "react";

const initialForm = {
  name: "",
  club: "",
  method: "Trực tiếp",
  status: "Sắp diễn ra"
};

export default function ActivityForm({ onAdd }) {
  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  function updateField(field, value) {
    setFormData({
      ...formData,
      [field]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = formData.name.trim();

    if (!name) {
      setError("Vui lòng nhập tên hoạt động");
      return;
    }

    if (name.length > 100) {
      setError("Tên hoạt động không quá 100 ký tự");
      return;
    }

    if (!formData.club) {
      setError("Vui lòng chọn câu lạc bộ");
      return;
    }

    onAdd({...formData, name});
    setFormData(initialForm);
    setError("");
  }

  return (
    <section className="panel">
      <div className="panel-header">
        <h2 className="panel-title">Đăng ký hoạt động mới</h2>
        <p className="panel-desc">Nhập thông tin hoạt động</p>
      </div>

      <form className="crud-form form-grid" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInput">Tên hoạt động</label>
          <input
            id="nameInput"
            className="form-control"
            type="text"
            placeholder="Nhập tên hoạt động"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
          />
          <small className="form-error">{error}</small>
        </div>

        <div className="form-group">
          <label htmlFor="clubSelect">Câu lạc bộ</label>
          <select
            id="clubSelect"
            className="form-control"
            value={formData.club}
            onChange={(event) => updateField("club", event.target.value)}
          >
            <option value="">Chọn câu lạc bộ</option>
            <option>CLB IT</option>
            <option>CLB Thể thao</option>
            <option>CLB Nghệ thuật</option>
            <option>CLB Tình nguyện</option>
          </select>
        </div>

        <div className="form-group">
          <span className="field-label">Hình thức</span>
          <div className="choice-row">
            <label>
              <input
                type="radio"
                name="method"
                value="Trực tiếp"
                checked={formData.method === "Trực tiếp"}
                onChange={(event) => updateField("method", event.target.value)}
              /> Trực tiếp
            </label>
            <label>
              <input
                type="radio"
                name="method"
                value="Trực tuyến"
                checked={formData.method === "Trực tuyến"}
                onChange={(event) => updateField("method", event.target.value)}
              /> Trực tuyến
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="statusSelect">Trạng thái</label>
          <select
            id="statusSelect"
            className="form-control"
            value={formData.status}
            onChange={(event) => updateField("status", event.target.value)}
          >
            <option>Sắp diễn ra</option>
            <option>Đang diễn ra</option>
            <option>Hoàn thành</option>
            <option>Đã hủy</option>
          </select>
        </div>

        <div className="form-actions form-span-2">
          <button className="btn btn-dark" type="submit">Thêm hoạt động</button>
        </div>
      </form>
    </section>
  );
}
