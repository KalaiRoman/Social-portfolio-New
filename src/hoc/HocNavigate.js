import React from "react";

function HocNavigate(Component) {
  function InsideChildComponent(props) {
    return <Component {...props} />;
  }
  return InsideChildComponent;
}

export default HocNavigate;
