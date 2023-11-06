import PageHead from '../common/pageHead';

const Support = () => {
  const handleAdmit = () => console.log('Admit');

  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Support"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="support"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Support;
