import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";

const SinglePostWeb = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(53);
  // const [idForBtn, setIdForBtn] = useState(1);

  const handleClick = () => {
    setId(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          mb: 3,
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Enter Post ID"
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleClick}>
          Get
        </Button>
      </Box>

      {post && post.id ? (
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="body2">{post.body}</Typography>
            <Typography variant="caption" color="text.secondary" display="block" mt={2}>
              Post ID: {post.id} | User ID: {post.userId}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="body1" color="text.secondary">
          No Post Selected
        </Typography>
      )}
    </Container>
  );
};

export default SinglePostWeb;
