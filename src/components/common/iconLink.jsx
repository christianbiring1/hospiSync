import { NavLink } from 'react-router-dom';

const IconLink = ({item, isOpen}) => (
  <NavLink to={item.path} key={item.label} className={({ isActive }) => (isActive ? 'active' : '')}>
    <ul className={isOpen ? '' : 'active'}>
      <li className={isOpen ? '' : 'active'}>
        <span className="icon">{item.icon}</span>
        <span className="label" style={{ display: isOpen ? 'inline' : 'none' }}>{item.label}</span>
      </li>
    </ul>
  </NavLink>
);

export default IconLink;
