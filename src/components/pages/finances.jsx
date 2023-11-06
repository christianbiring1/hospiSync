import PageHead from '../common/pageHead';

const Finances = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Finances"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="finances"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Finances;
