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
              <label htmlFor="name">Name</label>
              <HelpOutlineIcon style={styles} titleAccess='This is your name'/>
              <input type="text" id="name"/>
              <label htmlFor="password">Password</label><HelpOutlineIcon style={styles} titleAccess='Your Password'/>
              <input type="password" id="password"/>
              <button type="submit" className='submit_btn'>CONNEXION</button>
          </form>
        </div>
      </div>
  );
}
 
export default SignUpForm;