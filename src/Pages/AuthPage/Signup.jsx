import { useState } from 'react';
import './Auth.css';
import Authpic from '../../assets/Authpic.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../Features/AuthSlice';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.status);
  const authError = useSelector((state) => state.auth.error);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    if (!validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }
    if (!validatePassword(password)) {
      alert('Password must be at least 8 characters long');
      return;
    }

    console.log('Signup details:', { name, email, password });
    try {
      await dispatch(signup({ email, password }));
      alert('Account created successfully...!');
      navigate('/login');
    } catch (error) {
      alert('Account creation failed');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={Authpic} alt="Signup" />
      </div>
      <div className="auth-form">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              className="auth-input"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="auth-input"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email or Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <input
              className="auth-input"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {authState === 'failed' && <p>{authError}</p>}
          <div>
            <button type="submit" className="Auth-button">Create Account</button>
            <button type="button" className="googleAuth">Sign up with Google</button>
          </div>
        </form>
        <p className="bottom-text">Already have an account? <Link to="/login">Log in</Link></p>
      </div>
    </div>
  );
};

export default Signup;