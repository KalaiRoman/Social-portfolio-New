import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = ["Home", "Skills", "Projects", "Contact"];

  return (
    <div className="container p-3 bg-white  rounded">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fs-5 fw-semibold">Chats</h2>
        <div className="d-flex gap-2">
          <button className="btn btn-light p-2">
            <FaPlus />
          </button>
          <button className="btn btn-light p-2">
            <FaEllipsisV />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="position-relative mb-3">
        <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-secondary" />
        <input type="text" className="form-control ps-5" placeholder="Search" />
      </div>

      {/* Filter Tabs */}
      <div className="d-flex gap-2 overflow-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={` ${
              activeTab === tab ? "active-tab" : "inactive-tab"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
