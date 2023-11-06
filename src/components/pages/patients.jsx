import PageHead from '../common/pageHead';

const Patients = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Patient"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="patients"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Patients;
