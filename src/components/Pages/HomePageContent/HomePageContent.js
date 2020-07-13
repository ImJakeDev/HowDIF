// React
import React from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  homeContent: {
    maxWidth: "50vh",
    textAlign: "center",
    margin: "2vh",
  },
}));

const HomePageContent = () => {
  const classes = useStyles();
  return (
    <Box className={classes.homeContent}>
      <Typography variant="h5">HowDIF</Typography>
      <Typography variant="body2">
        {
          "HowDIF is a tool that helps you understand yourself and helps identify the emotions you are feeling. Your feelings and emotions are valid. You deserve to understand them better."
        }
      </Typography>
      {/* <Typography variant="subtitle1">
        HowDIF is a tool that helps you understand yourself and helps identify
        the emotions you are feeling. Your feelings and emotions are valid. You
        deserve to understand them better.
      </Typography> */}
      {/* <ul>
        <li>
          HowDIF is a tool that helps you understand yourself and helps identify
          the emotions you are feeling. Your feelings and emotions are valid.
          You deserve to understand them better.
        </li>
        <li>
          HowDIF provides the process to dig deeper into your emotions, and the
          data to analyze these emotions.
        </li>
        <li>
          With this app you will explore your emotions deeper which will empower
          you to understand your emotions.
        </li>
      </ul> */}
    </Box>
  );
};

export default HomePageContent;

