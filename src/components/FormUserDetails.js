import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = ({ formData, handleChange, nextStep }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Enter User Details" />
        <TextField
          name="firstName"
          hintText="Enter Your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("firstName")}
          defaultValue={formData.firstName}
        />
        <br />
        <TextField
          name="lastName"
          hintText="Enter Your Last Name"
          floatingLabelText="First Last"
          onChange={handleChange("lastName")}
          defaultValue={formData.lastName}
        />
        <br />
        <TextField
          name="email"
          hintText="Enter Your Email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={formData.email}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={next}
        />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

const styles = {
  button: {
    margin: 15,
  },
};

export default FormUserDetails;
