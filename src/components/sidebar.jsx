import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SickIcon from '@mui/icons-material/Sick';
// import LogoutTwoToneIcon from '@mui/icons-material/LogoutTwoTone';
import { NavLink } from 'react-router-dom';
const Sidebar = () => {

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
    <div>
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