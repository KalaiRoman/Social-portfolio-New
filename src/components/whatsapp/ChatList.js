import React from "react";

function ChatList() {
  return <div className="chat-list">
    {Array(20)?.fill("")?.map((item,index)=>{
        return(
            <div className="chat-list-card">
                {index+1}
            </div>
        )
    })}
  </div>;
}

export default ChatList;
