// import React, { useState } from 'react';
// import './Auth.css';
// import Authpic from '../../assets/Authpic.png';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { login } from '../../Features/AuthSlice';

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const authState = useSelector((state) => state.auth.status);
//   const authError = useSelector((state) => state.auth.error);
//   // const { status, error } = useSelector((state) => state.auth);

//   const validateEmail = (email) => {
//     const re = /\S+@\S+\.\S+/;
//     return re.test(email);
//   };

//   const validatePassword = (password) => {
//     return password.length >= 8;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert("All fields are required");
//       return;
//     }
//     if (!validateEmail(email)) {
//       alert('Please enter a valid email');
//       return;
//     }
//     if (!validatePassword(password)) {
//       alert('Password must be at least 8 characters long');
//       return;
//     }

//     console.log('Login details:', { email, password });
//     try {
//       await dispatch(login({ email, password }));
//       alert('Logged in successfully!');
//       navigate('/home');
//     } catch (error) {
//       alert('Login failed');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-image">
//         <img src={Authpic} alt="Login" />
//       </div>
//       <div className="auth-form">
//         <h2>Log in to Exclusive</h2>
//         <p>Enter your details below</p>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email or Phone Number"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//             />
//           </div>
//           {authState === 'failed' && <p>{authError}</p>}
//           <div className="btn-option">
//             <button className="login-btn" type="submit">Log in</button>
//             <p className="bottom-text">Forgot Password?</p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useState } from 'react';
import './Auth.css';
import Authpic from '../../assets/Authpic.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Features/AuthSlice';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
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

    console.log('Login details:', { email, password });
    try {
      const resultAction = await dispatch(login({ email, password }));
      if (login.fulfilled.match(resultAction)) {
        alert('Logged in successfully!');
        navigate('/home');
      } else {
        throw new Error(resultAction.payload || 'Login failed');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-image">
        <img src={Authpic} alt="Login" />
      </div>
      <div className="auth-form">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleSubmit}>
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
          {status === 'failed' && <p>{error}</p>}
          <div className="btn-option">
            <button className="login-btn" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Logging in...' : 'Log in'}
            </button>
            <p className="bottom-text">Forgot Password?</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
