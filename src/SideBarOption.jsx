import React from "react";
import "./SideBarOption.css";

const SideBarOption = ({ active, Icon, label }) => {
  return (
    <div className={`sideBarOption ${active && "sideBarOption--active"}`}>
      <Icon />
      <h2>{label}</h2>
    </div>
  );
};

export default SideBarOption;
