import React from 'react';

const GoogleLoginButton = () => {
  return (
    <form action="http://localhost:8080/auth/login/google" method="POST">
      <button type="submit">Login with Google</button>
    </form>
  );
};

export default GoogleLoginButton;
