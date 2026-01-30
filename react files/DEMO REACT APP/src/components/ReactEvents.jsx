import React from "react";

const ReactEvents = () => {
  const shoot = (a) => {
    alert(a);
  };
  const shoot1 = () => {
    alert("Great Shot!");
  };
  return (
    <div>
      <button onClick={() => shoot("Goal!")}>Take the shot! calling</button>
      {/* To pass an argument to an event handler, use an arrow function. */}
      <button onClick={shoot1}>Take the shot! invoke</button>
      {/* Put the shoot function inside the Football component:

 */}
    </div>
  );
};

export default ReactEvents;
