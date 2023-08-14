import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SickIcon from '@mui/icons-material/Sick';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    opacity: '0.5',
  };

  const menuItem = [
    {
      path: '/',
      icon: <DashboardIcon />,
      label: 'Dashboard',
    },
    {
      path: '/activities',
      icon: <EventAvailableIcon />,
      label: 'Activities',
    },
    {
      path: '/finances',
      icon: <AccountBalanceIcon />,
      label: 'Finances',
    },
    {
      path: '/patients',
      icon: <SickIcon />,
      label: 'Patients',
    },
    {
      path: '/login',
      icon: <LogoutTwoToneIcon />,
      label: 'LogOut',
    },
  ];

  const logoActive = {
    width: '5rem',
    height: 'auto',
  };

  const logo = {
    width: '3rem',
    height: 'auto',
  };

  return (
    <>
      <div className={isOpen ? 'sidebar' : 'sidebar active'} style={{ display: location.pathname === '/login' ? 'none' : 'block' }}>
        <div className={isOpen ? 'logo_container side_flex' : 'profil_container side_flex active'}>
          <LocalHospitalIcon style={isOpen ? logo : logoActive} />
          <h2 className="title" style={{ display: isOpen ? 'block' : 'none' }}>HospiSync</h2>
        </div>
        <button type="button" className="burger_container" onClick={handleToggleMenu}>
          {isOpen ? <MenuOpenIcon style={styles} /> : <CloseIcon style={styles} />}
        </button>
        <div className={isOpen ? 'profil_container side_flex' : 'profil_container side_flex active'}>
          <AccountCircleIcon style={{ width: '3rem', height: 'auto' }} />
          <div className="profil_content" style={{ display: isOpen ? 'block' : 'none' }}>
            <p className="name">Hello, ...</p>
            <p className="email">username@gmail.com</p>
          </div>
        </div>
        {menuItem.map((item) => (
          <NavLink to={item.path} key={item.label} className={({ isActive }) => (isActive ? 'active' : '')}>
            <ul className={isOpen ? '' : 'active'}>
              <li className={isOpen ? '' : 'active'}>
                <span className="icon">{item.icon}</span>
                <span style={{ display: isOpen ? 'inline' : 'none' }}>{item.label}</span>
              </li>
            </ul>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
