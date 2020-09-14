import React from "react";
import StepperStyles from "../Styles/StepperStyles";

import {
  Stepper,
  StepLabel,
  StepContent,
  Typography,
  Button,
  Paper,
  Step,
} from "@material-ui/core";
import RequestBlog from "./RequestBlog";
import CreateBlog from "./CreateBlog";

function getSteps() {
  return ["Request Permission", "Create your Blog", "Finish"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RequestBlog />;
    // `Fill up the request form. Ensure that all the details are correct. You will be contacted from the admin
    case 1:
      return <CreateBlog />;
    // "";
    case 2:
      return `Congratulations! your Blog is posted`;
    default:
      return "Unknown step";
  }
}

function FillForm() {
  const StepperStyle = StepperStyles();
  const [activeStep, setActiveStep] = React.useState(0);
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
    <div className={StepperStyle.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={StepperStyle.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={StepperStyle.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={StepperStyle.button}
                  >
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
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={StepperStyle.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default FillForm;
