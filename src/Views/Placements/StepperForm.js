import React, { useState } from "react";

// CSS
import StepperStyles from "../../Styles/StepperStyles";

// Components
import { Stepper, StepLabel, StepContent, Typography, Button, Paper, Step } from "@material-ui/core";
import RequestPlacement from "./RequestPlacement";
import CreatePlacement from "./CreatePlacement";

function getSteps() {
  return ["Request Permission", "Create your Placement"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RequestPlacement />;
    case 1:
      return <CreatePlacement />;
    default:
      return "Unknown step";
  }
}

function FillForm() {
  const StepperStyle = StepperStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <React.Fragment className={StepperStyle.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={StepperStyle.actionsContainer}>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={StepperStyle.button}>
                    Back
                  </Button>
                  <Button variant="contained" color="primary" onClick={handleNext} className={StepperStyle.button}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={StepperStyle.resetContainer}>
          <Typography>All steps completed - you&apos;re finished. Your Placement details will appear in the list soon.</Typography>
          <Button onClick={handleReset} className={StepperStyle.button}>
            Reset
          </Button>
        </Paper>
      )}
    </React.Fragment>
  );
}

export default FillForm;
