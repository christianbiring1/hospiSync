import PageHead from '../common/pageHead';
import Register from '../utils/register';

const Patients = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Patient"
          icon="<--"
          register="register"
          onAdmit={handleAdmit}
        />
      </div>
      <Register />
    </>
  );
};

export default Patients;
