import React from "react";
import StrangerThings from "./StrangerThings";
import Box from "@mui/material/Box";
import PropsChildren from "./PropsChildren";

const SecondComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid green",
        margin: 10,
        padding: 10,
      }}
    >
      <StrangerThings
        name="steve"
        short="Calm, analytical, and always three steps ahead. Steve plans the team's moves and keeps everyone focused on the mission."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcMDlUcg5hXJcA9N_4auGrLoGzCR-bplO5Tg&s"
        addtional="The Strategist"
      />
      <StrangerThings
        name="mike"
        short="Quick to adapt and great at improvising under pressure. Henry translates Steve's strategy into action on the ground."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2qHIDn791ZtThDdnoUnGt9CR_KgPSrWvdNA&s"
      />
      <StrangerThings
        name="henry"
        short="Energetic, bold and fearless. Mike sparks momentum and keeps morale high when the team needs an extra push."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFsJVmA4RZg7W5uiYQncYkZM19AFWAWQAFIw&s"
      />
      <PropsChildren/>
    </Box>
  );
};

export default SecondComponent;
