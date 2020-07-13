import React from 'react';
import { AppBar, Box, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import './Footer.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        HowDIF
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  copyright: {
    marginBottom: "10vh",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Box mt={5} className={classes.copyright}>
          <Copyright />
        </Box>
      </AppBar>
    </footer>
  );
}

export default Footer;
