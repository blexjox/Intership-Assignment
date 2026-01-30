import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

// Material UI Icons
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import ReactIcon from "@mui/icons-material/Polyline"; // custom replacement for React
import StorageIcon from "@mui/icons-material/Storage";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import BrushIcon from "@mui/icons-material/Brush";
import GitHubIcon from "@mui/icons-material/GitHub";

function Skills() {
  const skillsData = [
    { name: "HTML5", icon: <HtmlIcon sx={{ fontSize: 45, color: "#E34F26" }} /> },
    { name: "CSS3", icon: <CssIcon sx={{ fontSize: 45, color: "#1572B6" }} /> },
    { name: "JavaScript", icon: <JavascriptIcon sx={{ fontSize: 45, color: "#F7DF1E" }} /> },
    { name: "React.js", icon: <CodeIcon sx={{ fontSize: 45, color: "#61DBFB" }} /> },
    { name: "Material UI", icon: <BrushIcon sx={{ fontSize: 45, color: "#0081CB" }} /> },
    { name: "MongoDB", icon: <StorageIcon sx={{ fontSize: 45, color: "#4CAF50" }} /> },
    { name: "Node.js", icon: <SettingsSuggestIcon sx={{ fontSize: 45, color: "#83CD29" }} /> },
    { name: "Git & GitHub", icon: <GitHubIcon sx={{ fontSize: 45, color: "#000" }} /> },
  ];

  return (
    <div style={{ padding: "25px", maxWidth: "1000px", margin: "0 auto" }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        My Skills
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={3}>
        Here are the technologies and tools I work with frequently.  
        I use them to build fast, responsive, and modern web applications.
      </Typography>

      <Grid container spacing={3}>
        {skillsData.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                textAlign: "center",
                padding: 2,
                borderRadius: "12px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Box>{skill.icon}</Box>
                <Typography variant="h6" mt={1}>
                  {skill.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Image at Bottom */}
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
        alt="Skills Banner"
        style={{
          width: "100%",
          marginTop: "30px",
          borderRadius: "12px",
        }}
      />
    </div>
  );
}

export default Skills;
