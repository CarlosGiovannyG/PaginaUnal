import React,{useState} from 'react'
import styles from './carrito.module.css'
import { NavLink, useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import Mutations from '../../Utils/Mutations/'


const Carrito = () => {
  const userId = localStorage.getItem("userId"); 
  const  navigate = useNavigate()
  const [message, setMessage] = useState(null)

  const messages = message => {
    setMessage(message)
    setTimeout(() => setMessage(null), 5000)
  }

  const carro = () => {
    if (localStorage.getItem('compra')) {
      let array = localStorage.getItem('compra')
      array = JSON.parse(array)
      return array
    }
    return []
  }
  
  const array = carro()

let total = 0

  for (let i = 0; i < array.length; i++) {
    total = array[i].price + total
  }
  


  const result = array.map(({ name, price }) => { return { name, price } })
   
  const [Facturar] = useMutation(Mutations.FATURAR
    , {
    onError: error => {
      messages(error.graphQLErrors[0].extensions.response.body.mensaje)
    }
    }
  )



  const handleFactura = async e => {
    let response = await Facturar({ variables: {       
      "input": {
        "id_user": 20,
        "products": result 
      }
      }
    })

    console.log('RESPONS',response)
    localStorage.removeItem('compra')
    navigate('/')
  }



  return (
    <div className={styles.container}>
     { array.map((prod, index) => (
       <div key={prod._id}>         
         <h4>{prod.name}</h4>
         {prod.image && <img src={prod.image} alt={prod.name} />}
         <h6>{prod.price}</h6>
         <button onClick={() => {
           array.splice(index,1)
         }}>Eliminar del carro</button>
      </div>
     ))}
      
      {array.length && 
        <div>
          <h1>Total de su compra = ${total} </h1>
          <button onClick={handleFactura}>Confirmar Compra</button>
       </div>
      }
    </div>
  )
}

export default Carrito