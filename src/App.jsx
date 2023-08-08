import { Routes, Route } from 'react-router-dom'
import SignUpForm from './components/sign_up_form'
import Sidebar from './components/sidebar'
import Activities from './components/pages/activities';
import DashBoard from './components/pages/dashboard';
import Finances from './components/pages/finances';
import Patients from './components/pages/patients';
import './App.css'

function App() {

  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/login" element={<SignUpForm />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/finances" element={<Finances />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </>
  )
}

export default App
