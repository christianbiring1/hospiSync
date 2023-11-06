import PageHead from '../common/pageHead';

const Profil = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Profil"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="profil"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Profil;
