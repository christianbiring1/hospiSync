import PageHead from '../common/pageHead';

const Patients = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <div className="dashboard_container">
      <PageHead
        name="Patient"
        icon="<--"
        register="register"
        onAdmit={handleAdmit}
      />
    </div>
  );
};

export default Patients;
