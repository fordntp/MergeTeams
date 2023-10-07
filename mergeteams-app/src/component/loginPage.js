import React from 'react';
import GoogleLogin from './googleLogin';

const loginPage = ({ auth }) => {
  return (
    <div className='flex bg-vred'>
      <h2>Login Page</h2>
      <GoogleLogin auth={auth} />
    </div>
  );
};

export default loginPage;
