import React from "react";
import { characters } from "../utils/data";



const ListOfChars = () => {
  return (
    <div>
      <h1>list of stranger StrangerThings characters</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "2px dashed green",
          flexWrap: "wrap",
          margin: 10,
          padding: 10,
        }}
      >
        {characters.map((chars, index) => {
          return (
            <>
              <div
                key={index}
                style={{
                  width: 350,
                  height: 350,
                  backgroundColor: "lightgreen",
                }}
              >
                <h4>{chars.id}</h4>
                <h4>{chars.name}</h4>
                <h4>{chars.description}</h4>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListOfChars;
