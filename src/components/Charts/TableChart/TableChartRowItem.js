import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import IconButton from "@material-ui/core/IconButton";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

import { withStyles } from "@material-ui/core/styles";

import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
  root: {
    minWidth: "15vh",
  },
}))(TableCell);

const TableChartRowItem = (props) => {
  const [icons, setIcons] = useState(false);

  const [edit, setEdit] = useState(false);

  const [howFeel, setHowFeel] = useState();

  const [whyFeel, setWhyFeel] = useState(props.row.whyFeel);


  const handleEdit = () => {
    setEdit(true);
    setIcons(true);
    setHowFeel(props.row.howFeel);
    setWhyFeel(props.row.whyFeel);
  };

  const {dispatch} = props
  const handleSave = async () => {
    setEdit(false);
    setIcons(false);
    const emotionLog = {
      id: props.row.id,
      howFeel: howFeel,
      whyFeel: whyFeel,
    };
    // Look into promises 
    dispatch({ type: "EDIT_EMOTION_LOG", payload: emotionLog })
    console.log("Hey here is the log of emotions", emotionLog);
  };

  const renderIcons = () => {
    switch (icons) {
      case false:
        return (
          <IconButton
            aria-label="edit"
            color="secondary"
            onClick={() => handleEdit()}
          >
            <EditIcon />
          </IconButton>
        );
      case true:
        return (
          <IconButton
            aria-label="edit"
            color="secondary"
            onClick={() => handleSave()}
          >
            <SaveIcon />
          </IconButton>
        );
      default:
        break;
    }
  };
  
  const handleForHowChange = (e) => {
    setHowFeel(e.target.value);
    console.log(howFeel);
  };

  const renderHowFeel = () => {
    switch (edit) {
      case false:
        return props.row.howFeel;
      case true:
        return (
          <TextField
            id="outlined-multiline-flexible"
            label="Edit and then Save"
            multiline
            rowsMax={4}
            value={howFeel}
            onChange={handleForHowChange}
            variant="outlined"
          />
        );
      default:
        break;
    }
  };

  const handleForWhyChange = (e) => {
    setWhyFeel(e.target.value);
    console.log(whyFeel);
  };

  const renderWhyFeel = () => {
    switch (edit) {
      case false:
        return props.row.whyFeel;
      case true:
        return (
          <TextField
            id="outlined-multiline-flexible"
            label="Edit and then Save"
            multiline
            rowsMax={4}
            value={whyFeel}
            onChange={handleForWhyChange}
            variant="outlined"
          />
        );
      default:
        break;
    }
  };

  return (
    <StyledTableRow key={props.row.date}>
      <StyledTableCell align="right">{props.row.date}</StyledTableCell>
      <StyledTableCell align="right">
        {props.row.primaryEmotion}
      </StyledTableCell>
      <StyledTableCell align="right">
        {props.row.intensityEmotion}
      </StyledTableCell>
      <StyledTableCell align="right">
        {props.row.intensityLevel}
      </StyledTableCell>
      <StyledTableCell align="right">{renderHowFeel()}</StyledTableCell>
      <StyledTableCell align="right">{renderWhyFeel()}</StyledTableCell>
      <StyledTableCell align="right">{renderIcons()}</StyledTableCell>
    </StyledTableRow>
  );
};

export default connect()(TableChartRowItem);
