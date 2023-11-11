import React from 'react';
import ComponentTop from '../../../common/componentTop';
import SearchBox from '../../../common/searchBox';

const Maternel = () => {
  const patients = 'all patients';
  console.log(patients);

  return (
    <div className="patients-container">
      <ComponentTop title="List of Patients from Maternel" searchBox={<SearchBox />} />
    </div>
  );
};

export default Maternel;
