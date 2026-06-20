import { useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Statistics from "./components/Statistics.jsx";
import SearchBar from "./components/SearchBar.jsx";
import FilterTabs from "./components/FilterTabs.jsx";
import ActivityForm from "./components/ActivityForm.jsx";
import ActivityTable from "./components/ActivityTable.jsx";
import initialItems from "./data/data.json";

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [searchText, setSearchText] = useState("");
  const [activeStatus, setActiveStatus] = useState("Tất cả");

  const visibleItems = useMemo(() => {
    const keyword = searchText.toLowerCase();

    return items.filter((item) => {
      const matchStatus = activeStatus === "Tất cả" || item.status === activeStatus;
      const matchSearch =
        item.name.toLowerCase().includes(keyword) ||
        item.club.toLowerCase().includes(keyword);

      return matchStatus && matchSearch;
    });
  }, [items, searchText, activeStatus]);

  function handleAdd(formData) {
    const newItem = {
      id: Date.now(),
      ...formData
    };

    setItems([...items, newItem]);
  }

  return (
    <div className="app-shell theme-dark">
      <Header />
      <Statistics items={items} />

      <main className="main-grid layout-vertical">
        <ActivityForm onAdd={handleAdd} />

        <section className="panel">
          <div className="panel-header">
            <h2 className="panel-title">Danh sách hoạt động</h2>
            <p className="panel-desc">Tìm kiếm và lọc theo trạng thái</p>
          </div>

          <div className="toolbar">
            <SearchBar value={searchText} onChange={setSearchText} />
            <FilterTabs activeStatus={activeStatus} onChange={setActiveStatus} />
          </div>

          <ActivityTable items={visibleItems} />
        </section>
      </main>

      <footer className="app-footer">
        <strong>CSE391</strong>
        <span>Layout dọc mẫu</span>
        <span className="student-line">Họ tên SV: __________________ | Mã SV: __________</span>
      </footer>
    </div>
  );
}
