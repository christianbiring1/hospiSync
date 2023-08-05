/* eslint-disable */
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SickIcon from '@mui/icons-material/Sick';
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {

  const menuItem = [
    {
      path: '/dashboard',
      icon: DashboardIcon,
      label: 'Dashboard'
    }, 
    {
      path: '/activities',
      icon: EventAvailableIcon,
      label: 'Activities'
    },
    {
      path: '/finances',
      icon: AccountBalanceIcon,
      label: 'Finances'
    },
    {
      path: '/patients',
      icon: SickIcon,
      label: 'Patients'
    }
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
    <main>{children}</main>
    </>
  );
}
 
export default Sidebar;