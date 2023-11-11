import React from 'react';
import ComponentTop from '../../../common/componentTop';
import SearchBox from '../../../common/searchBox';

const Schedule = () => {
  const people = 'all people';
  console.log(people);

  return (
    <div className="patients-container">
      <ComponentTop title="Schedule" searchBox={<SearchBox />} />
    </div>
  );
};

export default Schedule;
