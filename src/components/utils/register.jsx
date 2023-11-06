import MultiStep from 'react-multistep';

import StepOne from './step1';
import StepTwo from './step2';
import StepThree from './step3';

const Register = () => (
  <MultiStep activeStep={0} prevButton={{ title: 'Back', style: { borderColor: 'red', marginRight: '1rem' } }}>
    <StepOne title="Step 1" />
    <StepTwo title="Step 2" />
    <StepThree title="Step 3" />
  </MultiStep>
);

export default Register;
