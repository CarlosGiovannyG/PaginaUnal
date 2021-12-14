import React from 'react';


import styles from './create.module.css';


const Create = () => {

  const token = localStorage.getItem('token')

  console.log('CREATE', token)


  return (
    <div className={styles.container}>
      <h1>
        Hello World desde Create
      </h1>
    </div>
  )
}

export default Create
