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
        <span>Imprimer</span>
        <span>.pdf</span>
        <span>.xls</span>
      </div>
    </div>
  </div>
);

export default ComponentTop;
