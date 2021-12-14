import React from 'react'

import styles from './nosotros.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  faMapMarkerAlt,
  faHeadset,
  faEnvelope,  
} from "@fortawesome/free-solid-svg-icons";
const Nosotros = () => {


  return (


      <div className={styles.footer}>
      <div className={styles.partFooter}>
        <h1>
          Delicias<b>&nbsp;Colombianas</b>
        </h1>
        <br />
        <p>
          Este espacio es que se especializa en el desarrollo & diseño de
          plataformas web, bases de datos, aplicaciones en java y edición de
          producciones de audios & videos.
        </p>
      </div>
      <div className={styles.partFooter}>
        <h5>INFORMACIÓN DE CONTACTO</h5>
        <link rel="stylesheet" href="" />       
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Calle 44 # 45-67 
          <br />
          <br />
        
        <link rel="stylesheet" href="" />   
          <FontAwesomeIcon icon={faHeadset} /> (57) + 316 5000
          <br />
          <br />
        
        <link rel="stylesheet" href="" />   
          <FontAwesomeIcon icon={faEnvelope} /> misiontic2022@gmail.com
        
      </div>
      <div className={styles.partFooter}>
        <h4 className={styles.redes}>REDES SOCIALES</h4>
        <div className={styles.socialmedia}>
          < FacebookOutlined />
          <InstagramOutlined />
          <WhatsAppOutlined />
          <MailOutlined />
        </div>
      </div>
      <div className={styles.containerfooter}>
        <hr />
        <h4> &copy; 2021 by Grupo 5</h4>
      </div>
    </div>
  )
}

export default Nosotros
