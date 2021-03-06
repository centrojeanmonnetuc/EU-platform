import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    minHeight: "60vh",
  },
}));

const MainContainer = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <Container
      className={styles.root}
      component="main"
      maxWidth="sm"
      {...props}
    >
      {children}
    </Container>
  );
};

export default MainContainer;
