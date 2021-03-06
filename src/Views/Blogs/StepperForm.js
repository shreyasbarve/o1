import React, { useState } from "react";

// CSS
import StepperStyles from "../../Styles/StepperStyles";

// Components
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
  return ["Request Permission", "Create your Blog"];
}

function FillForm() {
  const StepperStyle = StepperStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <RequestBlog onAfterRequest={handleNext} />;
      case 1:
        return <CreateBlog onAfterCreate={handleNext} />;
      default:
        return "Unknown step";
    }
  }

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
              {getStepContent(index)}
              <div className={StepperStyle.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={StepperStyle.button}
                  >
                    Back
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={StepperStyle.resetContainer}>
          <Typography>
            All steps completed - you&apos;re finished. Your Blog will appear in
            the list soon.
          </Typography>
          <Button onClick={handleReset} className={StepperStyle.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}

export default FillForm;
