import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";

import Posts from "../../components/Posts/Posts.js";
import Form from "../../components/Form/Form.js";

// import {useStyles} from "./styles.js";

import { getPosts } from "../../actions/posts";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  // const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing="3">
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
