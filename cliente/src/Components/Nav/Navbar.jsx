import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css'
import { useMutation } from '@apollo/client';
import Mutations from '../../Utils/Mutations/'


const Navbar = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const [LogoutUser] = useMutation(Mutations.LOGOUT)


  const handleLogout = async (e) => {

    let response = await LogoutUser({
      variables: {
        credentials: {
          token: e,
        }
      }
    })

    localStorage.clear();
    const { mensaje_sesion, mensaje_token } = response.data.LogoutUser
    alert(mensaje_sesion)
    alert(mensaje_token)

    navigate('/')
  }

  const enlaces = !token ? [
    { id: 1, tittle: 'Home', path: '/ProyectoUnal' },
    { id: 2, tittle: 'Menu', path: '/menu' },
    { id: 3, tittle: 'Nosotros', path: '/nosotros' },
    { id: 4, tittle: 'Login', path: '/login' },
    { id: 5, tittle: 'Registrese', path: '/register' },
  ] : [
    { id: 1, tittle: 'Home', path: '/' },
    { id: 2, tittle: 'Menu', path: '/menu' },
    { id: 3, tittle: 'Nosotros', path: '/nosotros' },
    { id: 4, tittle: 'Carrito', path: '/compra' },
  ]
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.Nav}>
          <ul className={styles.Ul} >
            {
              enlaces.map(e => (
                <NavLink to={e.path} key={e.id} className={(navData) => navData.isActive ? styles.active : ''}
                >
                  <div>
                    <li className={styles.Li}>{e.tittle}</li>
                  </div>
                </NavLink>
              ))
            }
            {token &&
              <div>
                <button className={styles.Dat3} onClick={() => { handleLogout(token) }} >Cerrar Sesion</button>
                <NavLink to={`/user`} className={(navData) => navData.isActive ? styles.active : ''}>
                  <button>Ver Perfil</button>
                </NavLink>
              </div>
            }
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
