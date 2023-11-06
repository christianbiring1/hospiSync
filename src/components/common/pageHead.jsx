import '../../styles/page_head.css';
import { Link } from 'react-router-dom';

const PageHead = ({
  icon, name, register, onAdmit, bill, homeLink, linkName
}) => (
  <div className="page_head">
    <div className="left">
      <div className="back_icon">{icon}</div>
      <div>
        <h2 className="page_name">{name}</h2>
        <p className="links">
          <Link to="/" className="home">{homeLink}</Link>
          <Link to={`/${linkName}`} className="name">{linkName}</Link>
        </p>
      </div>
    </div>
    <div className="right">
      {register ? (
        <button
          type="button"
          onClick={onAdmit}
          style={{
            backgroundColor: '#fff', color: '#000', borderColor: '#000',
          }}
        >
          Register
        </button>
      ) : ''}
      {bill ? (
        <button
          type="button"
          onClick={onAdmit}
          style={{ backgroundColor: '#1b449e', color: '#fff' }}
        >
          Bill
        </button>
      ) : ''}
    </div>
  </div>
);

export default PageHead;
