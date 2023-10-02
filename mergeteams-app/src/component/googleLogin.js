// googleLogin.js
import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const googleLogin = ({ auth }) => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleGoogleSignIn}>Sign in with Google</button>
  );
};

export default googleLogin;
