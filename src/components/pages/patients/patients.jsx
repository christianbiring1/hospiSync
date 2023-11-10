import PageHead from '../../common/pageHead';
import IconLink from '../../common/iconLink';

const Patients = () => {
  const handleAdmit = () => console.log('Admit');
  const navbar = [
    {
      path: '/patients',
      icon: 'Icon',
      label: 'Tous',
    },
    {
      path: '/patients/maternel',
      icon: 'Icon',
      label: 'Maternel',
    },
    {
      path: '/patients/primary',
      icon: 'Icon',
      label: 'Primary',
    },
  ];

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
      <div className="component">
        {navbar.map((item) => (
          <IconLink key={item.label} item={item} isOpen />
        ))}
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Patients;
