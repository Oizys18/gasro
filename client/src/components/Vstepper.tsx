import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    actionsContainer: {
      marginBottom: theme.spacing(2),
    },
    resetContainer: {
      padding: theme.spacing(3),
    },
    active: {
      "& $line": {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
    completed: {
      "& $line": {
        backgroundImage:
          "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
      },
    },
  })
);

function getSteps() {
  return ["점화방법", "온도조절 및 설정", "시간조절 및 설정", "소화 방법"];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return (
        <>
          <p>
            POWER 스위치를 ON으로 한 후 HEAT 스위치를 ON으로 하면 10초 공회전 후
            점화됩니다.
          </p>
          <p>이때 온도가 상승하며 현재 온도가 표시 됩니다.</p>
          <p>
            점화가 안되고 Err표시가 되면서 알림이 울리면 가스공급 유무를
            확인하여 주십시오.
          </p>
        </>
      );
    case 1:
      return (
        <>
          <p>점화중에도 UP, DOWN 버튼으로 온도의 설정, 변경이 가능합니다.</p>
          <p>온도 설정 범위: 섭씨(0°C ~300°C) / 화씨 (0°F~ 570°F)</p>
          <p>
            온도 설정, 변경 시 3초간 점멸 후 설정 온도가 표시되고 잠시후
            현재온도가 표시됩니다.
          </p>
        </>
      );
    case 2:
      return (
        <>
          <p>
            컨베이어 스위치를 ON으로 한 후 UP 또는 DOWN 버튼으로 시간을 설정 및
            조절합니다.
          </p>
        </>
      );
    case 3:
      return (
        <>
          <p>HEAT스위치를 OFF로 하면 오븐이 소화됩니다.</p>
          <p>7분간 송풍 팬이 공회전을 한 후 자동으로 꺼집니다.</p>
          <p>송풍 팬이 멈추면 POWER 스위치를 OFF로 하여 전원을 차단합니다</p>
        </>
      );
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
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
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              {getStepContent(index)}
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
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
        <Paper square elevation={0} className={classes.resetContainer}>
          <Button
            color="primary"
            onClick={handleReset}
            className={classes.button}
          >
            처음으로
          </Button>
        </Paper>
      )}
    </div>
  );
}
