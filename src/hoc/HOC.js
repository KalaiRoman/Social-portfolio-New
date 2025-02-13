import React from "react";

function HOC(Childcomponents) {
  function InsideChildComponents(props) {
    const name = "kalaisurya thala";
    return <Childcomponents {...props} desc={name} />;
  }

  return InsideChildComponents;
}

export default HOC;
