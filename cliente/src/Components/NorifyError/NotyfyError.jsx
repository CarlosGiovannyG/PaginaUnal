import React from 'react'
import styles from './notify.module.css'



const NotyfyError = ({message}) => {
  return (
    <div className={styles.container}>
      <h1>
        {message}
      </h1>
    </div>
  )
}

export default NotyfyError
