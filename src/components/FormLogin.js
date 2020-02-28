import React, { useState } from 'react';
import api from '../services/api';
import { Form, Input } from '@rocketseat/unform';
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";

export default function FormLogin() {

  const [username, setUsername] = useState('teste');
  const [password, setPassword] = useState('***###$$$12345');
  let history = useHistory();

  const handleSubmit = (data) => {

    console.log(history)

    api.post('/wp-json/jwt-auth/v1/token/',
      {
        username: username,
        password: password
      })
      .then(function (response) {
        if (response.status === 200) {
          const data = response.data;
          Cookies.set('token', data.token);
          console.log(data);
          history.push("/");
        }
      })
      .catch(function (error) {
        function strip_html_tags(str) {
          if ((str === null) || (str === ''))
            return false;
          else
            str = str.toString();
          return str.replace(/<[^>]*>/g, '');
        }
        alert(strip_html_tags(error.response.data.message));
      });

  }

  return (
    <>
      <fieldset>
        <legend>Autenticação</legend>
        <Form onSubmit={handleSubmit}>

          <div>
            <label htmlFor="username">Usuário</label>
            <Input
              type="text"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit">Enviar</button>
          </div>

        </Form>
      </fieldset>
    </>
  );
}

