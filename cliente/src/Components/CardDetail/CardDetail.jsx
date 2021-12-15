import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import Queries from '../../Utils/Queries/'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router';

import styles from './carDetail.module.css'


const CardDetail = () => {
  const { pathname } = useLocation()
  const location = pathname.split('/', 2).join('')

  const navigate = useNavigate()
  const [getProduct, result] = useLazyQuery(Queries.FIND_PRODUCT)
  const { id } = useParams()
  const login = localStorage.getItem("login");

  useEffect(() => {
    getProduct({ variables: { producId: { id: id } } })
  }, [getProduct, id])

  const detail = result.data

  if (!detail) return null


  const addCarro = (obj) => {
    let array = [];

    if (localStorage.getItem("compra")) {
      array = localStorage.getItem("compra");
      array = JSON.parse(array);
      array.push(obj);
      localStorage.setItem("compra", JSON.stringify(array));
    } else {
      array.push(obj);
      localStorage.setItem("compra", JSON.stringify(array));
    }
    navigate('/menu')

  };

  const eliminar = (id) => {
    let array = []
    if (localStorage.getItem("compra")) {
      array = localStorage.getItem("compra");
      array = JSON.parse(array);
      array = array.filter(obj => obj._id !== id)
      localStorage.setItem("compra", JSON.stringify(array));
      navigate('/compra')

    }
  }


  return (
    <>
      <Link to='/menu'>
        <button className={styles.ButtonClose}>X</button>
      </Link>
      <div className={styles.container}>
        <h1>{detail.ProductById.name}</h1>
        <img src={detail.ProductById.image} alt={detail.name} />
        <h4>{detail.ProductById.category.name}</h4>
        <span>{detail.ProductById.description}</span>
        <h4>{detail.ProductById.price}</h4>
        <h4>{detail.ProductById.measure_unit.name}</h4>
      </div>

      {login && location === 'product' &&
        <div className={styles.comprar}>
          <button
            className={styles.compra}
            onClick={() => {
              addCarro({
                _id: detail.ProductById._id,
                price: detail.ProductById.price,
                name: detail.ProductById.name,
                image: detail.ProductById.image,
              });
            }}
          >
            <p>Comprar</p>
          </button>
        </div>
      }
      {login && location === 'compra' &&
        <div className={styles.comprar}>
          <button
            className={styles.compra}
            onClick={() => {
              eliminar(id);
            }}
          >
            <p>Eliminar del carro</p>
          </button>
        </div>
      }

    </>
  )
}

export default CardDetail
