import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Statistics from "./components/Statistics.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FilterTabs from "./components/FilterTabs.jsx";
import ShipmentForm from "./components/ShipmentForm.jsx";
import ShipmentTable from "./components/ShipmentTable.jsx";
import { items as initialItems } from "./data/data.js";

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [searchText, setSearchText] = useState("");
  const [activeStatus, setActiveStatus] = useState("Tất cả");

  const visibleItems = useMemo(() => {
    const keyword = searchText.toLowerCase();

    return items.filter((item) => {
      const matchStatus = activeStatus === "Tất cả" || item.status === activeStatus;
      const matchSearch =
        item.code.toLowerCase().includes(keyword) ||
        item.receiver.toLowerCase().includes(keyword);

      return matchStatus && matchSearch;
    });
  }, [items, searchText, activeStatus]);

  function createCode() {
    const nextNumber = items.length + 1;
    return `SH${String(nextNumber).padStart(3, "0")}`;
  }

  function handleAdd(formData) {
    const newItem = {
      id: Date.now(),
      code: createCode(),
      ...formData
    };

    setItems([...items, newItem]);
  }

  return (
    <div className="app-shell theme-dark">
      <Header />
      <Statistics items={items} />

      <main className="main-grid layout-form-right">
        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Danh sách đơn vận chuyển</h2>
            <p className="panel-desc">Tìm kiếm và lọc theo trạng thái</p>
          </div>

          <div className="toolbar">
            <SearchBar value={searchText} onChange={setSearchText} />
            <FilterTabs activeStatus={activeStatus} onChange={setActiveStatus} />
          </div>

          <ShipmentTable items={visibleItems} />
        </section>

        <ShipmentForm onAdd={handleAdd} />
      </main>

      <footer className="app-footer">
        <strong>CSE391</strong>
        <span>Layout ngang mẫu</span>
        <span className="student-line">Họ tên SV: __________________ | Mã SV: __________</span>
      </footer>
    </div>
  );
}
