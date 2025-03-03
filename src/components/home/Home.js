import React from "react";
import HOC from "../../hoc/HOC";
import TabSections from "./TabSections";
function Home() {
  return (
    <div className="main-home">
      <div className="inside-home">
        <div className="inside-home-section">
          <div className="tab-sections">
            
            <TabSections />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOC(Home);
