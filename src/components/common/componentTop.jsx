import PictureAsPdfOutlined from '@mui/icons-material/PictureAsPdfOutlined';
import FileCopy from '@mui/icons-material/FileCopy';
import ImportContacts from '@mui/icons-material/ImportContacts';

const ComponentTop = ({ title, searchBox }) => (
  <div className="component-top">
    <div className="top">
      <h3>{title}</h3>
    </div>
    <div className="top-right">
      <div>
        {searchBox}
      </div>
      <div className="icons-container">
        <span><ImportContacts /></span>
        <span><PictureAsPdfOutlined /></span>
        <span><FileCopy /></span>
      </div>
    </div>
  </div>
);

export default ComponentTop;
