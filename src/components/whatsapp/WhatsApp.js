import React from "react";
import SearchBar from "./SearchBar";
import ChatList from "./ChatList";

function WhatsApp() {
  return (
    <div className="main-whats-app">
      <div className="whats-app-left">
        <div>
          <SearchBar/>
        </div>
        <div>
          <ChatList/>
        </div>
      </div>
      <div className="whats-app-right">right</div>
    </div>
  );
}

export default WhatsApp;
