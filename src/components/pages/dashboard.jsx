import { NavLink } from 'react-router-dom';

import PageHead from '../common/pageHead';
import '../../styles/dashboard.css';

const DashBoard = () => {
  const handleAdmit = () => console.log('Admin admit');
  return (
    <div className="dashboard_container">
      <PageHead name="dashboard" icon="<--" onAdmit={handleAdmit} />
      <di className="rooms_container">
        <div className="room-head">
          <span>Icon</span>
          <h2>Patient's rooms</h2>
        </div>
        <div className="room-nav">
          <ul>
            <li><NavLink to="">Level 1</NavLink></li>
            <li><NavLink to="">Level 2</NavLink></li>
            <li><NavLink to="">Level 3</NavLink></li>
          </ul>
        </div>
      </di>
    </div>
  );
};

export default DashBoard;
