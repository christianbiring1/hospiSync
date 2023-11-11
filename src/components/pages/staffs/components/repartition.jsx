import React from 'react';
import ComponentTop from '../../../common/componentTop';
import SearchBox from '../../../common/searchBox';

const Repartition = () => {
  const people = 'all people';
  console.log(people);

  return (
    <div className="patients-container">
      <ComponentTop title="Repartition" searchBox={<SearchBox />} />
    </div>
  );
};

export default Repartition;
