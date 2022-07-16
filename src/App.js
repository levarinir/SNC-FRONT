import React, { lazy, Suspense, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/nav/Header';
import { loadUser } from './api/user';

const Home = lazy(() => import('./components/home/Home'));
const Login = lazy(() => import('./components/auth/Login'));
const Register = lazy(() => import('./components/auth/Register'));

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    let token = localStorage.getItem('token');
    auth(token);
  }, []);

  const auth = async (token) => {
    if (token) {
      const res = await loadUser(token);
      if (res.status === 200) {
        setUser({ ...res.data, token });
      } else {
        localStorage.removeItem('token');
      }
    }
  };
  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser({});
  };
  const updateUser = (user) => {
    setUser(user);
  };
  return (
    <Suspense fallback={<div className="col text-center p-5">Loading...</div>}>
      <BrowserRouter>
        <ToastContainer />
        <Header user={user} handleLogout={handleLogout} />
        <Routes>
          <Route exact path="/" element={<Home user={user} />} />
          <Route
            exact
            path="/login"
            element={<Login handleUser={updateUser} />}
          />
          <Route
            exact
            path="/register"
            element={<Register handleUser={updateUser} />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
