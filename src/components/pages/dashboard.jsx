import { NavLink } from 'react-router-dom';
// import ArrowBack from '@mui/icons-material/ArrowBack';

import PageHead from '../common/pageHead';
import '../../styles/dashboard.css';

const DashBoard = () => {
  const handleAdmit = () => console.log('Admin admit');
  return (
    <div className="dashboard_container">
      <PageHead
        name="Dashboard"
        // icon={<ArrowBack />}
        register="register"
        bill="bill"
        homeLink="Home"
        onAdmit={handleAdmit}
      />
      <div className="rooms_container">
        <div className="room-head">
          <span>Icon</span>
          <h2>Patient&apos;s rooms</h2>
        </div>
        <div className="room-nav">
          <span><NavLink to="">Level 1</NavLink></span>
          <span><NavLink to="">Level 2</NavLink></span>
          <span><NavLink to="">Level 3</NavLink></span>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
