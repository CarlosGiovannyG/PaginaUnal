import React from 'react';
import { Link } from 'react-router-dom'

import styles from './card.module.css'


const Card = ({ products }) => {


  if (!products) return null

  return (
    <>
      {
        products.map(product => (
          <div className={styles.container} key={product._id} >
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <h3>{product.category.name}</h3>
            <Link to={`/product/${product._id}`} >
              <button>VISITAR</button>
            </Link>
          </div>
        ))
      }



    </>
  )
}

export default Card
