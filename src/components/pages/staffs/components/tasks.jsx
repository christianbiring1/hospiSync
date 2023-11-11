import ComponentTop from '../../../common/componentTop';
import SearchBox from '../../../common/searchBox';

const Tasks = () => (
  <div className="patients-container">
    <ComponentTop title="List of Tasks" searchBox={<SearchBox />} />
  </div>
);

export default Tasks;
