import { Routes, Route } from 'react-router-dom';
import SignUpForm from './components/sign_up_form';
import Sidebar from './components/sidebar';
import Activities from './components/pages/activities';
import DashBoard from './components/pages/dashboard';
import Finances from './components/pages/finances';
import Patients from './components/pages/patients/patients';
import './App.css';
import Staff from './components/pages/staff';
import Profil from './components/pages/profil';
import Settings from './components/pages/settings';
import FAQs from './components/pages/FAQs';
import Support from './components/pages/support';
import Guide from './components/pages/guide';

function App() {
  return (
    <div className="app_container">
      <div className="navigation_content">
        <Sidebar />
      </div>
      <div className="page_content">
        <Routes>
          <Route path="/login" element={<SignUpForm />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/support" element={<Support />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/" element={<DashBoard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
