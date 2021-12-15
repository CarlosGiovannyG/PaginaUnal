import React from "react";
import styles from './centro.module.css'
import { Link } from 'react-router-dom';


function Centro ({titulo, parrafo,centroInicio,centroMenu}) {
   return (
     <div className={styles.contenidoInicio}>
       <div className={styles.contenidos}>
         <h1>{titulo}</h1>
         <p>{parrafo}</p>
         <Link to='/menu'  >
           <button className={styles.btnMenu}> Ir al Menu </button>
        </Link>
       </div>
     </div>
   );
}

export default Centro;