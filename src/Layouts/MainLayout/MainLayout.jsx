// Libraries
import React from "react";

//Components
import Header from "../../components/Header";

// Styles
import "./MainLayout.styles.css";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
    </div>
  );
};

export default MainLayout;
