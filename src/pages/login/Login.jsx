import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
      <span className="login-title">Login</span>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Enter Your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter Your Password" />
        <button className="login-submit">Login</button>
      </form>
      <button className="login-register-btn">
        <Link to="/register" className="link">
          Register
        </Link>
      </button>
    </div>
  );
}
