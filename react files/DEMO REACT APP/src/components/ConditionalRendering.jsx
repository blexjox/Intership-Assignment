import React from "react";

function MissedGoal() {
  return <h1> He MISSED! the Goal</h1>;
}

function MadeGoal() {
  return <h1> He scored the Goal!</h1>;
}
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}
function Goals(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

function Car(props) {
  return <>{props.brand && <h1>My car is a {props.brand}!</h1>}</>;
}

const ConditionalRendering = () => {
  return (
    <>
      <Goal isGoal={true} />
      <Goals isGoal={true} />
      <Car brand="hello" />
    </>
  );
};

export default ConditionalRendering;
