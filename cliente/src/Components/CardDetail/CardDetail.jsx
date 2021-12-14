import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { Link, useParams } from 'react-router-dom';
import Queries from '../../Utils/Queries/'

import styles from './carDetail.module.css'




const CardDetail = () => {

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

  };

  return (
    <>
      <div className={styles.container}>
        <h1>{detail.ProductById.name}</h1>
        <img src={detail.ProductById.image} alt={detail.name} />
        <h4>{detail.ProductById.category.name}</h4>
        <span>{detail.ProductById.description}</span>
        <h4>{detail.ProductById.price}</h4>
        <h4>{detail.ProductById.measure_unit.name}</h4>
      </div>
      <div class={styles.comprar}>
        {login &&
          <button
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
        }
      </div>
      <Link to='/menu'>
        <button className={styles.ButtonClose}>X</button>
      </Link>
    </>
  )
}

export default CardDetail
