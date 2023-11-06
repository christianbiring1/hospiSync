import PageHead from '../common/pageHead';

const Staff = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Staff"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="staff"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Staff;
