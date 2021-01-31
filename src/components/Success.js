import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

const Success = ({ nextStep, prevStep }) => {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Sucess" />
        <h1>Thank you for your Submission</h1>
        <p>You will get an email with further instructions!</p>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Success;
