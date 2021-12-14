import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import Mutations from '../../Utils/Mutations/'
import NotyfyError from '../NorifyError/NotyfyError';
import { NavLink, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()

  const [message, setMessage] = useState(null)

  const messages = message => {
    setMessage(message)
    setTimeout(() => setMessage(null), 5000)
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [LoginUser] = useMutation(Mutations.LOGIN, {
    onError: error => {
      messages(error.graphQLErrors[0].extensions.response.body.mensaje)
    }
  })

  const handleLogin = async e => {
    e.preventDefault();
    let response = await LoginUser({
      variables: {
        credentials: {
          username: username,
          password: password
        }
      }
    })



    const { token, mensaje, user } = response.data.LoginUser

    console.log('LOGIN TOKEN', token)

    localStorage.setItem("token", token);
    localStorage.setItem("name", user.name);
    localStorage.setItem("userId", user.id);
    localStorage.setItem("login", true)

    // localStorage.setItem("username", user.username); 
    // localStorage.setItem("last_name", user.last_name); 

    messages(mensaje)
    setUsername('')
    setPassword('')
    navigate('/')
  }

  return (
    <div>
      <NotyfyError message={message} />
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" required value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Login
