import './register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register">
      <span className="register-title">Register</span>
      <form className="register-form">
        <label>Username</label>
        <input type="text" placeholder="Enter username" />
        <label>Email</label>
        <input type="email" placeholder="Enter Your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter Your Password" />
        <button className="register-submit">Register</button>
      </form>
      <button className="register-login-btn">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
    </div>
  );
}
