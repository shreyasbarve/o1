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
import RequestPlacement from "./RequestPlacement";
import CreatePlacement from "./CreatePlacement";

function getSteps() {
  return ["Request Permission", "Create your Placement"];
}

function FillForm() {
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <RequestPlacement onAfterRequest={handleNext} />;
      case 1:
        return <CreatePlacement onAfterCreate={handleNext}/>;
      default:
        return "Unknown step";
    }
  }
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
            All steps completed - you&apos;re finished. Your Placement details
            will appear in the list soon.
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
