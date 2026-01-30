import React from 'react'

const Attributes = () => {
    const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  };
  return (
    <div>
        <h1 style={mystyles}>My car</h1>
        {/* Use the style attribute: */}
        <h1 className="myclass">Hello World</h1>
        {/* Use attribute className instead of class in JSX: */}
    </div>
  )
}

export default Attributes