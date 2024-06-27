// import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <div className="login-buttons">
        <Link to="/student-login">
          <button>Student Login</button>
        </Link>
        <Link to="/teacher-login">
          <button>Teacher Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
