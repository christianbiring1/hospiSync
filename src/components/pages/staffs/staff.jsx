import { Routes, Route } from 'react-router-dom';
import PageHead from '../../common/pageHead';
import IconLink from '../../common/iconLink';

import People from './components/personal';
import Tasks from './components/tasks';
import Repartition from './components/repartition';
import Schedule from './components/schedule';

const Staff = () => {
  const navbar = [
    {
      path: '/staff',
      icon: 'Icon',
      label: 'Team',
    },
    {
      path: '/staff/chores',
      icon: 'Icon',
      label: 'Chores',
    },
    {
      path: '/staff/repartitions',
      icon: 'Icon',
      label: 'Repartition',
    },
    {
      path: '/staff/schedule',
      icon: 'Icon',
      label: 'Schedule',
    },
  ];

  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Staff"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="staff"
          onAdmit={handleAdmit}
        />
      </div>
      <div className="component">
        <div className="navigations">
          {navbar.map((item) => (
            <IconLink key={item.label} item={item} isOpen />
          ))}
        </div>
        <div className="content">
          <Routes>
            <Route path="/chores" element={<Tasks />} />
            <Route path="/repartitions" exact element={<Repartition />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/" element={<People />} />
          </Routes>
        </div>
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Staff;
