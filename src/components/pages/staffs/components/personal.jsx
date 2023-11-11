import React from 'react';
import ComponentTop from '../../../common/componentTop';
import SearchBox from '../../../common/searchBox';

const People = () => {
  const people = 'all people';
  console.log(people);

  return (
    <div className="patients-container">
      <ComponentTop title="List of Staff" searchBox={<SearchBox />} />
    </div>
  );
};

export default People;
