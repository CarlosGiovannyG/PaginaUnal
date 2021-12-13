import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'

const Navbar = () => {

  

  const token = localStorage.getItem('token')
  // const name = localStorage.getItem("name");
  // const username = localStorage.getItem("username");
  // const last_name = localStorage.getItem("last_name");


  const enlaces = !token ? [
    { id: 1, tittle: 'Home', path: '/' },
    { id: 2, tittle: 'Menu', path: '/menu' },
    { id: 3, tittle: 'Nosotros', path: '/nosotros' },
    { id: 4, tittle: 'Create', path: '/create' },
    { id: 5, tittle: 'Login', path: '/login' },
  ] : [
    { id: 1, tittle: 'Home', path: '/' },
    { id: 2, tittle: 'Menu', path: '/menu' },
    { id: 3, tittle: 'Nosotros', path: '/nosotros' },
    { id: 4, tittle: 'Create', path: '/create' },
    { id: 5, tittle: 'Logout', path: '/login' },
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
          </ul>
        </nav>
      </div>
      {token && 
      <input
        type="submit"
        name=""
        value='Cerrar'
        className={styles.Dat3}
        
      />
      }
    </>
  )
}

export default Navbar
