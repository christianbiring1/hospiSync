import React from 'react';
import ComponentTop from '../../../common/componentTop';
import SearchBox from '../../../common/searchBox';

const AllPatients = () => {
  const patients = 'all patients';
  console.log(patients);

  return (
    <div className="patients-container">
      <ComponentTop title="List of All Patients" searchBox={<SearchBox />} />
    </div>
  );
};

export default AllPatients;
