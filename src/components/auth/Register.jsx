import React, { useState } from 'react';
import { signup } from '../../api/user';

import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = ({ handleUser }) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: '',
    password: '',
    role: 0,
  });

  const { username, password } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(values);
      if (res.status === 200) {
        const token = res.data.token;
        localStorage.setItem('token', token);
        toast('Sign up');
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

  const registerForm = () => (
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
      <div className="mb-3">
        <select
          className="form-control"
          name="role"
          onChange={(e) => onChange({ ...e, value: parseInt(e.value, 10) })}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="mb-3">
          <h4>Sign up</h4>
        </div>
        {registerForm()}
      </div>
    </div>
  );
};

export default Register;
