import "./App.css";

import Table from "./components/Table";

const sidebarList = ["Movies", "TV Shows", "Games"];

function App() {
  const renderSidebarList = () => {
    return sidebarList.map((item) => {
      return <li className="sidebar-list-item">{item}</li>;
    });
  };
  return (
    <div className="App">
      {/* <aside className="app-sidebar">
        <ul className>
          {renderSidebarList()}
        </ul>
      </aside> */}
      <main className="main-container">
        <Table />
      </main>
    </div>
  );
}

export default App;
