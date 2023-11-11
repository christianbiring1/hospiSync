import React from 'react';
import ComponentTop from '../../../common/componentTop';

const AllPatients = () => {
  const patients = 'all patients';
  console.log(patients);

  return (
    <div className="patients-container">
      <ComponentTop title="List of All Patients" />
    </div>
  );
};

export default AllPatients;
