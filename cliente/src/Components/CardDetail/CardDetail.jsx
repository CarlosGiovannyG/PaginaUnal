import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import {Link, useParams } from 'react-router-dom';
import Queries from '../../Utils/Queries/'

import styles from './carDetail.module.css'




const CardDetail =  ( ) => {

  const [getProduct, result] = useLazyQuery(Queries.FIND_PRODUCT)
  const { id } = useParams()

   useEffect(() => {
    getProduct({ variables: { producId: { id: id } } })
   }, [getProduct, id])

   const detail = result.data

  if (!detail) return null
  
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
      <Link to='/menu'>
        <button className={styles.ButtonClose}>X</button>
      </Link>
    </>
  )
}

export default CardDetail
