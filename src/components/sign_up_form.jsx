import Profil from "../assets/logIn_picture.jpg"
import "../styles/sign_up.css"
const SignUpForm = () => {
  return (
      <div className="login_container">
        <img src={Profil} alt="" />
        <div className="form__container">
          <form action="" className="login__form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password"/>
          </form>
        </div>
      </div>
  );
}
 
export default SignUpForm;