import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";
import { ButtonGroup } from "@mui/material";

function valuetext(value) {
  return `${value[1] - value[0]} minutes`;
}

export default function RangeSlider() {
  const [summaryWindow, setSummaryWindow] = React.useState([20, 37]);
  const [eventWindow, setEventWindow] = React.useState([20, 37]);
  const [dispatchedMiutes, setDispatchedWindow] = React.useState([20, 37]);
  var [now, setNow] = React.useState(50);
  const fixedSize = { mx: "auto", width: 100 };
  const fixedTab = { mx: "auto", width: "60%" };
  const fixedButtonSize = { mx: "auto", width: 100 };
  const myStyles = {
    soft: {
      color: "red",
      backgroundColor: "white",
      fontSize: 12
    }
  };

  const myStyle = {
    fontSize: 12
  };
  const red = {
    ...myStyle,
    color: "red",
    backgroundColor: "white"
  };
  const styleBuilder = (color, background, size) => {
    return {
      myStyles,
      color: color,
      backgroundColor: background,
      fontSize: size ? size : 12
    };
  };

  const handleChangeSummaryWindow = (event, newValue) => {
    calculateDuration(newValue);
    setSummaryWindow(newValue);
  };

  const handleChangeSEventWindow = (event, newValue) => {
    calculateDuration(newValue);
    setEventWindow(newValue);
  };
  const handleChangeInstant = (event, newValue) => {
    calculateDuration(newValue);
    setNow(newValue);
  };

  const calculateDuration = (values) => {
    let start = Math.max(summaryWindow[0], eventWindow[0]);
    let end = Math.min(summaryWindow[1], eventWindow[1], now);
    if (start <= end) {
      dispatchedMiutes[0] = start;
      dispatchedMiutes[1] = end;
      setDispatchedWindow(dispatchedMiutes);
    }
  };

  return (
    <Box sx={{ padding: 3, mx: "auto", width: "90%" }} color="secondary">
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={{ width: "100%" }}>
          <Button
            sx={{ textAlign: "right", width: "100%" }}
            size="extraLarge"
            variant="contained"
            style={styleBuilder("#37474f", "#cfd8dc")}
          >
            Summary overlapping sttrategy
          </Button>
        </Grid>
      </Grid>

      <hr />
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            sx={fixedButtonSize}
            size="small"
            variant="contained"
            style={styleBuilder("white", "#90a4ae")}
          >
            Now
          </Button>
        </Grid>
        <Grid item xs>
          <Slider
            value={now}
            onChange={handleChangeInstant}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            style={styleBuilder("#90a4ae", "white")}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            sx={fixedButtonSize}
            size="small"
            variant="contained"
            style={styleBuilder("white", "#607d8b")}
          >
            summary
          </Button>
        </Grid>
        <Grid item xs>
          <Slider
            value={summaryWindow}
            onChange={handleChangeSummaryWindow}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            style={styleBuilder("#607d8b", "white")}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            sx={fixedButtonSize}
            size="small"
            variant="contained"
            style={styleBuilder("white", "#455a64")}
          >
            Event
          </Button>
        </Grid>
        <Grid item xs>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={eventWindow}
            onChange={handleChangeSEventWindow}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            style={styleBuilder("#455a64", "white")}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Button
            sx={fixedButtonSize}
            size="small"
            variant="contained"
            style={styleBuilder("white", "#37474f")}
          >
            Duration
          </Button>
        </Grid>
        <Grid item xs>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={dispatchedMiutes}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            style={styleBuilder("#37474f", "white")}
          />
        </Grid>
      </Grid>
      <hr />
      <Grid container spacing={2} alignItems="center">
        <Grid item sx={fixedTab}></Grid>
        <Grid item>
          <ButtonGroup>
            <Button
              sx={fixedButtonSize}
              size="small"
              style={styleBuilder("white", "#263238")}
              variant="contained"
            >
              Duration
            </Button>
            <Button
              sx={fixedButtonSize}
              size="small"
              style={styleBuilder("white", "#263238")}
              variant="contained"
            >
              {valuetext(dispatchedMiutes)}
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>

      <p></p>
    </Box>
  );
}
