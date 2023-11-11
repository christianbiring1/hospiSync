import { Routes, Route } from 'react-router-dom';
import PageHead from '../../common/pageHead';
import IconLink from '../../common/iconLink';
import AllPatients from './components/allPatients';
import Maternel from './components/maternelle';
import Primary from './components/primary';

import '../../../styles/components.css';

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
        <div className="navigations">
          {navbar.map((item) => (
            <IconLink key={item.label} item={item} isOpen />
          ))}
        </div>
        <div className="content">
          <Routes>
            <Route path="/maternel" element={<Maternel />} />
            <Route path="/primary" element={<Primary />} />
            <Route path="/" exact element={<AllPatients />} />
          </Routes>
        </div>
      </div>
      {/* <Register /> */}
    </>
  );
};

export default Patients;
