import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import ScrollToTopButton from "./components/ScrollToTopButton";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
          <Outlet/>
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default App;
