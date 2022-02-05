import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import { Link } from 'react-router-dom';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Enter your credentials!
        </h1>
        <div className='form-inputs'>
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
        </div>
        <button className='form-input-btn' type='submit'>
        <Link to="/FormSignin" className='fakeButton'>Sign in</Link>
        </button>
        <span className='form-input-login'>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
