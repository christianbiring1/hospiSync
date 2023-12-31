import React from 'react';
import ComponentTop from '../../../common/componentTop';
import SearchBox from '../../../common/searchBox';

const Primary = () => {
  const patients = 'all patients';
  console.log(patients);

  return (
    <div className="patients-container">
      <ComponentTop title="List of Patients from Primary" searchBox={<SearchBox />} />
    </div>
  );
};

export default Primary;
