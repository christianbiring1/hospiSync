import PageHead from '../common/pageHead';

const Activities = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Activities"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="activities"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Activities;
