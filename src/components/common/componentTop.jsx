const ComponentTop = ({ title, searchBox }) => (
  <div className="component-top">
    <div className="top">
      <h3>{title}</h3>
    </div>
    <div className="icons-container">
      {searchBox}
      <p>Imprimer</p>
      <p>.pdf</p>
      <p>.xls</p>
    </div>
  </div>
);

export default ComponentTop;
