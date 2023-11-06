import PageHead from '../common/pageHead';

const Guide = () => {
  const handleAdmit = () => console.log('Admit');

  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="HandBook"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="guide"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Guide;
