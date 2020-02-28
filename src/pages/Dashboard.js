import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import './styles.css';

import Cookies from 'js-cookie';

function Dashboard() {

  const [user, setUser] = useState([]);


  function handleLogout() {
    Cookies.remove('token', { path: '' });
  }

  function getCurrentUser() {
    const token = Cookies.get('token');

    api.post('wp-json/wp/v2/users/me', {}, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(function (response) {
        if (response.status === 200) {
          const data = response.data;
          console.log(data);
          setUser(data);
        }
      })
      .catch(function (error) {
        console.log(error.response);
      });

  }

  return (
    <>
      <ul className="menu_list">
        <li><Link className="link" to='#' onClick={getCurrentUser}>Meu perfil</Link></li>
        <li><Link className="link" to='/' onClick={handleLogout}>Logout</Link></li>
        <li><Link className="link" to='/' >Back</Link></li>
      </ul>
      <h1>Dashboard</h1>
      <h2>{user.name}</h2>
    </>
  );

}

export default Dashboard;
