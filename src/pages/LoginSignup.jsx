import React ,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CSS/LoginSignup.css';

const LoginSignup = ({ setIsLoggedIn, setUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState('Chandu');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({});

  const handleContinue = (event) => {
    event.preventDefault();
    const newErrors = {};

    
    if (!name) {
      newErrors.name = 'Please enter your name';
    }

    if (!email) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Invalid email address';
    }

   
    if (!password) {
      newErrors.password = 'Please enter your password';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    
    if (!agree) {
      newErrors.agree = 'Please agree to the terms and conditions';
    }

    setErrors(newErrors);

   
    if (Object.keys(newErrors).length === 0) {
     
      setIsLoggedIn(true);
      setUser({ name }); 
      navigate('/Shop'); 
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleContinue}>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

            <input
              type="email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

            <input
              type="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
          </div>

          <button type="submit">Continue</button>

         
          <p className="loginsignup-login">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')} 
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              Login here
            </span>
          </p>

          <div className="loginsignup-agree">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
            {errors.agree && <p style={{ color: 'red' }}>{errors.agree}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
