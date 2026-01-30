import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

import Attributes from "../components/Attributes";
import ConditionalRendering from "../components/ConditionalRendering";
import ListOfChars from "../components/ListOfChars";
import Expression from "../components/Expression";
import StudentForm from "../components/StudentForm";
// import EventHandling from "../components/EventHandling";
import ReactEvents from "../components/ReactEvents";
import ObjectReading from "../components/ObjectReading";
import PropsChildren from "../components/PropsChildren";
import Ruseeffect from "../components/Ruseeffect";
import Rusestate from "../components/Rusestate";
import DataFetching from "../components/DataFetching";
import SinglePost from "../components/SinglePost";
import HookMouse from "../components/HookMouse";
import HookCounterOne from "../components/HookCounterOne";
import IntervalHookCounter from "../components/IntervalHookCounter";

import "./ReactConcepts.css";

const componentsList = [
  // { title: "Attributes", component: <Attributes /> },
  // { title: "Conditional Rendering", component: <ConditionalRendering /> },
  // { title: "ListOfChars", component: <ListOfChars /> },
  // { title: "Expressions", component: <Expression /> },
  // { title: "StudentForm", component: <StudentForm /> },
  // { title: "React Events", component: <ReactEvents /> },
  // //   { title: "Event Handling", component: <EventHandling /> },
  // { title: "Object Reading", component: <ObjectReading /> },
  // { title: "Props Children", component: <PropsChildren /> },
  // { title: "useEffect Hook", component: <Ruseeffect /> },
  // { title: "useState Hook", component: <Rusestate /> },
  { title: "DataFetching", component: <DataFetching /> },
  // { title: "SinglePost", component: <SinglePost /> },
  // //   { title: "useState Hook", component: <Rusestate /> },
  // { title: "HookMouse", component: <HookMouse /> },
  // { title: "HookCounterOne", component: <HookCounterOne /> },
  // { title: "IntervalHookCounter", component: <IntervalHookCounter /> },
];

const ReactConcepts = () => {
  return (
    <Box className="react-concepts-container">
      <Typography variant="h3" className="title">
        React Concepts Covered
      </Typography>

      <Grid container spacing={3} mt={3}>
        {componentsList.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="concept-card">
              <CardContent>
                <Typography variant="h5" className="card-title">
                  {item.title}
                </Typography>
                <Box className="content-box">{item.component}</Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ReactConcepts;
