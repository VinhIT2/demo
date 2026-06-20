import { useState } from "react";

const initialForm = {
  receiver: "",
  location: "",
  type: "Thường",
  status: "Chờ lấy"
};

export default function ShipmentForm({ onAdd }) {
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
    const receiver = formData.receiver.trim();

    if (!receiver) {
      setError("Vui lòng nhập người nhận");
      return;
    }

    if (receiver.length > 100) {
      setError("Tên người nhận không quá 100 ký tự");
      return;
    }

    if (!formData.location) {
      setError("Vui lòng chọn địa điểm");
      return;
    }

    onAdd({
      ...formData,
      receiver
    });
    setFormData(initialForm);
    setError("");
  }

  return (
    <section className="panel">
      <div className="panel-header">
        <h2 className="panel-title">Tạo đơn mới</h2>
        <p className="panel-desc">Nhập thông tin vận chuyển</p>
      </div>

      <form className="crud-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="receiverInput">Người nhận</label>
          <input
            id="receiverInput"
            className="form-control"
            type="text"
            placeholder="Nhập tên người nhận"
            value={formData.receiver}
            onChange={(event) => updateField("receiver", event.target.value)}
          />
          <small className="form-error">{error}</small>
        </div>

        <div className="form-group">
          <label htmlFor="locationSelect">Địa điểm</label>
          <select
            id="locationSelect"
            className="form-control"
            value={formData.location}
            onChange={(event) => updateField("location", event.target.value)}
          >
            <option value="">Chọn địa điểm</option>
            <option>Hà Nội</option>
            <option>Đà Nẵng</option>
            <option>TP.HCM</option>
            <option>Hải Phòng</option>
            <option>Cần Thơ</option>
          </select>
        </div>

        <div className="form-group">
          <span className="field-label">Loại hàng</span>
          <div className="choice-row">
            <label>
              <input
                type="radio"
                name="type"
                value="Thường"
                checked={formData.type === "Thường"}
                onChange={(event) => updateField("type", event.target.value)}
              /> Thường
            </label>
            <label>
              <input
                type="radio"
                name="type"
                value="Nhanh"
                checked={formData.type === "Nhanh"}
                onChange={(event) => updateField("type", event.target.value)}
              /> Nhanh
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
            <option>Chờ lấy</option>
            <option>Đang giao</option>
            <option>Đã giao</option>
            <option>Đã hủy</option>
          </select>
        </div>

        <button className="btn btn-dark btn-block" type="submit">Thêm đơn</button>
      </form>
    </section>
  );
}
