import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LoginIcon from '@mui/icons-material/Login';
import "bootstrap/dist/css/bootstrap.css"
import "../styles/sign_up.css"
import { useState } from 'react';
const SignUpForm = () => {

  const [account, setAccount] = useState({
    username: "",
    password: ""
  });

  const styles = {
    cursor: "help",
    fontSize: "18px",
    color: "gray"
  }

  const period_year = new Date().getFullYear();

  const handleChange = ({currentTarget: input}) => {
    const {name, value} = input;
    setAccount(prev => {
      return {...prev, [name]: value }
    })

    console.log(account)
  }

  const handleSubmit = (e) => {
    e.preventDefault()


    // Call the server
    console.log('Form submited!')
  }
  return (
      <div className="login_container">
        <div className="hero__container">
        </div>
        <div className="form__container">
          <div>
            <LoginIcon />
          </div>
          <div className="logo__container">
            <h4>Logo Will go here</h4>
            <p>To access HospiSync you must provide the following informations.</p>
          </div>
          <form onSubmit={handleSubmit} className="login__form">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Name</label>
              <HelpOutlineIcon style={styles} titleAccess='This is the name you have used to register'/>
              <input
                type="text"
                value={account.username}
                onChange={handleChange}
                name='username'
                id="username"
                className="form-control"
                autoFocus
              />
           </div>
           <div className="mb-3">
             <label htmlFor="password" className="form-label">Password</label>
             <HelpOutlineIcon style={styles} titleAccess='Your Password'/>
             <input
               type="password"
               value={account.password}
               onChange={handleChange}
               name='password'
               id="password"
               className="form-control"
              />
            </div>
           <button type="submit" className="btn btn-primary mt-3">Connexion</button>
          </form>
          <div className="login__footer">
            <span>&copy;{period_year} {' '} HospiSynch</span>
            <span className=''>Designed by <small className='text-primary'>Christian Biringanine</small></span>
          </div>
        </div>
      </div>
  );
}
 
export default SignUpForm;