import React from "react";
import SearchBar from "./SearchBar";
import ChatList from "./ChatList";
import MessageSections from "./MessageSections";

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
      <div className="whats-app-right">
        <MessageSections/>
      </div>
    </div>
  );
}

export default WhatsApp;
