import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

const FormUserDetails = ({ formData, nextStep, prevStep }) => {
  const next = (e) => {
    e.preventDefault();
    //PROCESS FORM
    nextStep();
  };

  const back = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Confirm User Data" />
        <List>
          <ListItem
            primaryText="First Name"
            secondaryText={formData.firstName}
          />
          <ListItem primaryText="Last Name" secondaryText={formData.lastName} />
          <ListItem primaryText="Email" secondaryText={formData.email} />
          <ListItem
            primaryText="Occupation"
            secondaryText={formData.occupation}
          />
          <ListItem primaryText="City" secondaryText={formData.city} />
          <ListItem primaryText="Bio" secondaryText={formData.bio} />
        </List>
        <br />
        <RaisedButton
          label="Confirm & Continue"
          primary={true}
          style={styles.button}
          onClick={next}
        />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={back}
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
