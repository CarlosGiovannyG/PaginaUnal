import React from 'react';
import { Link } from 'react-router-dom'
import styles from './card.module.css'
import { useLocation } from 'react-router';


const Card = ({ products }) => {
  const { pathname } = useLocation()

  if (!products) return null

  return (
    <>
      {pathname === '/compra' && products.map(product => (
        <div className={styles.container} key={product._id} >
          {product.name && <h2>{product.name}</h2>}
          {product.image && <img src={product.image} alt={product.name} />}
          {product.price && <h3>{product.price}</h3>}
          <Link to={`/compra/${product._id}`} >
            <button>REVISAR</button>
          </Link>
        </div>
      ))
      }
      {pathname === '/menu' && products.map(product => (
        <div className={styles.container} key={product._id} >
          {product.name && <h2>{product.name}</h2>}
          {product.image && <img src={product.image} alt={product.name} />}
          {product.category && <h3>{product.category.name}</h3>}
          {product.price && <h3>{product.price}</h3>}
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
