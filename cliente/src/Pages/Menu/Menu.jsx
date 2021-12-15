import React from 'react';
import { useQuery } from '@apollo/client';
import Products from '../../Components/Products/Products'
import Queries from '../../Utils/Queries'
import styles from './menu.module.css'


const Menu = () => {

  const { data, loading, error } = useQuery(Queries.ALL_PRODUCTS)

  if (loading) {
    return (
      <div> Cargando ...</div>
    )
  }

  if (error) return null

  return (
    <div className={styles.container}>
      <Products products={data.Products} />

    </div>
  )


}

export default Menu
