import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SickIcon from '@mui/icons-material/Sick';
import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { useLocation } from 'react-router-dom';

import IconLink from './common/iconLink';
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

  const iconStyle = {
    width: '2rem',
    height: 'auto',
  };

  const dashboard = [
    {
      path: '/',
      icon: <DashboardIcon style={iconStyle} />,
      label: 'Dashboard',
    },
  ];

  const CRM = [
    {
      path: '/patients',
      icon: <SickIcon style={iconStyle} />,
      label: 'Patients',
    },
    {
      path: '/staff',
      icon: <GroupsIcon style={iconStyle} />,
      label: 'Staffs',
    },
    {
      path: '/finances',
      icon: <AccountBalanceIcon style={iconStyle} />,
      label: 'Finances',
    },
    {
      path: '/activities',
      icon: <EventAvailableIcon style={iconStyle} />,
      label: 'Events',
    },
  ];

  const paremetres = [
    {
      path: '/profil',
      icon: <PersonIcon style={iconStyle} />,
      label: 'Profil',
    },
    {
      path: '/settings',
      icon: <SettingsIcon style={iconStyle} />,
      label: 'Settings',
    },
  ];

  const getHelp = [
    {
      path: '/faqs',
      icon: <HelpOutlineIcon style={iconStyle} />,
      label: 'FAQS',
    },
    {
      path: '/support',
      icon: <SupportAgentIcon style={iconStyle} />,
      label: 'Get Help',
    },
    {
      path: '/guide',
      icon: <LocalLibraryIcon style={iconStyle} />,
      label: 'User HandBook',
    },
  ];

  const login = [
    {
      path: '/login',
      icon: <LogoutTwoToneIcon style={iconStyle} />,
      label: 'LogOut',
    },
  ];

  const logoActive = {
    width: '5rem',
    height: 'auto',
    color: '#2645b7',
  };

  const logo = {
    width: '3rem',
    height: 'auto',
    color: '#2645b7',
  };

  return (
    <>
      <div className={isOpen ? 'sidebar' : 'sidebar active'} style={{ display: location.pathname === '/login' ? 'none' : 'block' }}>
        <div className={isOpen ? 'logo_container side_flex' : 'profil_container side_flex active'}>
          <LocalHospitalIcon style={isOpen ? logo : logoActive} />
          <h2 className="title" style={{ display: isOpen ? 'block' : 'none' }}>HospiSync</h2>
        </div>
        <button type="button" className="burger_container" onClick={handleToggleMenu}>
          <MenuOpenIcon style={styles} />
        </button>
        <div className={isOpen ? 'profil_container side_flex' : 'profil_container side_flex active'}>
          <AccountCircleIcon style={{ width: '3rem', height: 'auto' }} />
          <div className="profil_content" style={{ display: isOpen ? 'block' : 'none' }}>
            <p className="name">Hello, ...</p>
            <p className="email">username@gmail.com</p>
          </div>
        </div>
        <div className="navigation_container">
          <div>
            {dashboard.map((item) => (
              <IconLink key={item.label} item={item} isOpen={isOpen} />
            ))}
          </div>
          <div className="nav_group">
            <p>CRM</p>
            <div>
              {CRM.map((item) => (
                <IconLink key={item.label} item={item} isOpen={isOpen} />
              ))}
            </div>
          </div>
          <div className="nav_group">
            <p>SETTINGS</p>
            <div>
              {paremetres.map((item) => (
                <IconLink key={item.label} item={item} isOpen={isOpen} />
              ))}
            </div>
          </div>
          <div className="nav_group">
            <p>ASSISTANCE</p>
            <div>
              {getHelp.map((item) => (
                <IconLink key={item.label} item={item} isOpen={isOpen} />
              ))}
            </div>
          </div>
          <div>
            <div>
              {login.map((item) => (
                <IconLink key={item.label} item={item} isOpen={isOpen} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
