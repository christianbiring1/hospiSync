import PageHead from '../common/pageHead';

const Settings = () => {
  const handleAdmit = () => console.log('Admit');
  return (
    <>
      <div className="dashboard_container">
        <PageHead
          name="Settings"
          icon="<--"
          register="register"
          homeLink="Home"
          linkName="settings"
          onAdmit={handleAdmit}
        />
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Settings;
