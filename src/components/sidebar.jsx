import { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SickIcon from '@mui/icons-material/Sick';
// import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import '../styles/sidebar.css'
const Sidebar = () => {

  const [isOpen, setIsOpen] = useState(true);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const styles = {
    width: '100%',
    height: 'auto',
    cursor: 'pointer',
    opacity: '0.5'
  }

  const menuItem = [
    {
      path: '/',
      icon: <DashboardIcon />,
      label: 'Dashboard'
    }, 
    {
      path: '/activities',
      icon: <EventAvailableIcon />,
      label: 'Activities'
    },
    {
      path: '/finances',
      icon: <AccountBalanceIcon />,
      label: 'Finances'
    },
    {
      path: '/patients',
      icon: <SickIcon />,
      label: 'Patients'
    },
    // {
    //   path: '/login',
    //   icon: <LogoutTwoToneIcon />,
    //   label: 'LogOut'
    // }
  ]

  return (
    <>
    <div className='sidebar'>
      <div className="logo_container side_flex">
        <LocalHospitalIcon />
        <h2 className='title'>HospiSync</h2>
      </div>
      <div className="burger_container" onClick={handleToggleMenu}>
        {isOpen ? <MenuOpenIcon style={styles}/> : <CloseIcon style={styles}/>}
      </div>
      <div className="profil_container side_flex">
        <AccountCircleIcon style={{width: 'auto', height: '3rem'}}/>
        <div className="profil_content">
          <p className="name">Hello, ...</p>
          <p className="email">username@gmail.com</p>
        </div>
      </div>
      {menuItem.map((item) => (
        <NavLink to={item.path} key={item.label}>
          <div>{item.icon}</div>
          <div>{item.label}</div>
        </NavLink>
      ))}
    </div>
    </>
  );
}
 
export default Sidebar;