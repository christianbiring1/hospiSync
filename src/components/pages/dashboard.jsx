import { NavLink } from 'react-router-dom';

import PageHead from '../common/pageHead';
import '../../styles/dashboard.css';

const DashBoard = () => {
  const handleAdmit = () => console.log('Admin admit');
  return (
    <div className="dashboard_container">
      <PageHead
        name="Dashboard"
        icon="<--"
        register="register"
        bill="bill"
        onAdmit={handleAdmit}
      />
      <di className="rooms_container">
        <div className="room-head">
          <span>Icon</span>
          <h2>Patient's rooms</h2>
        </div>
        <div className="room-nav">
          <span><NavLink to="">Level 1</NavLink></span>
          <span><NavLink to="">Level 2</NavLink></span>
          <span><NavLink to="">Level 3</NavLink></span>
        </div>
      </di>
    </div>
  );
};

export default DashBoard;
