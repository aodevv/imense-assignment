import { useState } from "react";

import "./App.scss";

import Header from "./layout/Header/Header";
import Sidebar from "./layout/Sidebar/Sidebar";
import SubPages from "./layout/SubPages/SubPages";
import Body from "./layout/Body/Body";

import { GlobalStyles } from "./GlobalStyles";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };
  return (
    <div className="App">
      <GlobalStyles />

      <Sidebar full={sideBar} toggleSidebar={toggleSidebar} />
      <div className="right">
        <Header full={sideBar} toggleSidebar={toggleSidebar} />
        <SubPages />
        <Body />
      </div>

      {/* 
        sidebar
        right
          header
          subPages
          body
            content = table

      */}
    </div>
  );
}

export default App;
