import { Routes, Route } from 'react-router-dom';
import GroupsIcon from '@mui/icons-material/Groups';
import EventAvailable from '@mui/icons-material/EventAvailable';
import Task from '@mui/icons-material/Task';

import PageHead from '../../common/pageHead';
import IconLink from '../../common/iconLink';

import People from './components/personal';
import Tasks from './components/tasks';
import Repartition from './components/repartition';
import Schedule from './components/schedule';

const Staff = () => {
  const iconStyle = {
    width: '2rem',
    height: 'auto',
  };

  const navbar = [
    {
      path: '/staff',
      icon: <GroupsIcon style={iconStyle} />,
      label: 'Team',
    },
    {
      path: '/staff/chores',
      icon: <Task />,
      label: 'Chores',
    },
    {
      path: '/staff/repartitions',
      icon: 'Icon',
      label: 'Repartition',
    },
    {
      path: '/staff/schedule',
      icon: <EventAvailable style={iconStyle} />,
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
