import React from 'react'


import Card from '../../Components/Card/Card'

import styles from './products.module.css'




  
const Products = ({ products}) => {
    
  if(!products) return null
   
  return (
    <div className={styles.container}>
      <Card products={products} />
    </div>
  )
}

export default Products
