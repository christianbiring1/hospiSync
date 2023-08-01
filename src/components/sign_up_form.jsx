import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profil from "../assets/logIn_picture.jpg"
import "../styles/sign_up.css"
const SignUpForm = () => {

  const styles = {
    cursor: "help",
    fontSize: "18px",
    color: "gray"
  }
  return (
      <div className="login_container">
        <img src={Profil} alt="" />
        <div className="form__container">
          <form action="" className="login__form">
            <div className="input__container">
              <label htmlFor="name">Name</label>
              <HelpOutlineIcon style={styles} titleAccess='This is your name'/>
              <input type="text" id="name"/>
            </div>
            <div className="input__container">
              <label htmlFor="password">Password</label><HelpOutlineIcon style={styles} titleAccess='Your Password'/>
              <input type="password" id="password"/>
            </div>
            <div className="button__container">
              <button type="submit" className='submit_btn'>CONNEXION</button>
            </div>
          </form>
        </div>
      </div>
  );
}
 
export default SignUpForm;