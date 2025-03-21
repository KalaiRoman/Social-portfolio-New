import React from "react";
import HOC from "../../hoc/HOC";
import TabSections from "./TabSections";
import WhatsApp from "../whatsapp/WhatsApp";
function Home() {
  return (
    <div className="main-home">
      <div className="inside-home">
        <div className="inside-home-section">
          <div className="tab-sections">
            <TabSections />
          </div>
          <div className="body-section-home">
            <WhatsApp/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOC(Home);
