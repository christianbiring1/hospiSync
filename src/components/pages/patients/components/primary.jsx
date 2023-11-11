import React from 'react';
import ComponentTop from '../../../common/componentTop';

const Primary = () => {
  const patients = 'all patients';
  console.log(patients);

  return (
    <div className="patients-container">
      <ComponentTop title="List of Patients from Maternel" />
    </div>
  );
};

export default Primary;
