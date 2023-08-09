/* eslint-disable */
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LoginIcon from '@mui/icons-material/Login';
import Joi from 'joi-browser';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/sign_up.css';
import { useState } from 'react';

const SignUpForm = () => {
  const [account, setAccount] = useState({
    username: '',
    password: '',
  });

  const [allErrors, setAllErrors] = useState({});

  const styles = {
    cursor: 'help',
    fontSize: '18px',
    color: 'gray',
  };

  const periodYear = new Date().getFullYear();

  const schema = {
    username: Joi.string().trim().min(3).required()
      .label('Name'),
    password: Joi.string().trim().min(6).required()
      .label('Password'),
  };

  const validate = () => {
    const result = Joi.validate(account, schema, { abortEarly: false });
    if (!result.error) return;
    const errors = {};
    for (const item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const new_schema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, new_schema);

    return error ? error.details[0].message : null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validate();
    setAllErrors(errors || {});
    if (errors) return;

    // Call the server
    console.log('Form submited!');
    window.location = '/';
  };

  const handleChange = ({ currentTarget: input }) => {
    const { name, value } = input;
    const errors = { ...allErrors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errors[name] = errorMessage;
    else delete errors[name];
    setAccount((prev) => ({ ...prev, [name]: value }));

    setAllErrors(errors);
  };
  return (
    <div className="login_container">
      <div className="hero__container" />
      <div className="form__container">
        <div>
          <LoginIcon style={{ width: '3rem', height: 'auto' }} />
        </div>
        <div className="logo__container">
          <h4>Logo Will go here</h4>
          <p>To access HospiSync you must provide the following informations.</p>
        </div>
        <form onSubmit={handleSubmit} className="login__form">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Name</label>
            <HelpOutlineIcon style={styles} titleAccess="This is the name you have used to register" />
            <input
              type="text"
              value={account.username}
              onChange={handleChange}
              name="username"
              id="username"
              className="form-control"
              autoFocus
            />
            {allErrors.username && <div className="text-danger error__message">{allErrors.username}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <HelpOutlineIcon style={styles} titleAccess="Your Password" />
            <input
              type="password"
              value={account.password}
              onChange={handleChange}
              name="password"
              id="password"
              className="form-control"
            />
          </div>
          {allErrors.password && <div className="text-danger error__message">{allErrors.password}</div>}
          <button type="submit" className="btn btn-primary mt-3" disabled={validate()}>Connexion</button>
        </form>
        <div className="login__footer">
          <span>
            &copy;
            {periodYear}
            {' '}
            {' '}
            {' '}
            HospiSynch
          </span>
          <span className="">
            Designed by
            {' '}
            <small className="text-primary">Christian Biringanine</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
