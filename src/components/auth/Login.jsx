import React, { useState } from 'react';
import { signin } from '../../api/user';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({ handleUser }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const { username, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signin(values);
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('token', token);
        toast('Sign in');
        handleUser({ ...res.data.user, token });
        navigate('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="string"
          name="username"
          className="form-control"
          value={username}
          onChange={(e) => onChange(e)}
          placeholder="username"
          autoFocus
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          value={password}
          onChange={(e) => onChange(e)}
          placeholder="password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="mb-4">
          <h4>Sign in</h4>
        </div>
        {loginForm()}
      </div>
    </div>
  );
};

export default Login;
