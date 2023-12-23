import { useState } from 'react';

import StepBar from './Stepbar';
import StepperControl from './StepperControl';
import { UseContextProvider } from '../../contexts/StepperContext';

import Account from './steps/Account';
import Details from './steps/Details';
import Payment from './steps/Payment';
import Final from './steps/Final';

import '../../styles/register.css';

function Register() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    'Account Informations',
    'Personal Deatails',
    'Payment',
    'Completed',
  ];

  function displayStep(step) {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep += 1 : newStep += 1;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <StepBar steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}

export default Register;
