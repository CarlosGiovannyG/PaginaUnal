import React, { useState } from 'react'
import styles from './carrito.module.css'
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import Mutations from '../../Utils/Mutations/'
import Products from '../../Components/Products/Products';

const Carrito = () => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate()
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

  let array = carro()

  let total = 0

  for (let i = 0; i < array.length; i++) {
    total = array[i].price + total
  }

  let result = array.map(({ name, price }) => { return { name, price } })

  const [Facturar] = useMutation(Mutations.FATURAR
    , {
      onError: error => {
        messages(error.graphQLErrors[0])
      }
    }
  )

  const handleFactura = async e => {

    await result.push({ total: total })

    let response = await Facturar({
      variables: {
        "input": {
          "user": Number(userId),
          "products": result
        }
      }
    })

    console.log(response.data)
    localStorage.removeItem('compra')
    navigate('/')
  }


  return (
    <>
      <div className={styles.Boton}>
        <h4>Total de su compra = ${total} </h4>
        <button className={styles.Boton1} onClick={handleFactura}>Confirmar Compra</button>
      </div>

      <div className={styles.container}>
        <Products products={array} />
      </div>



    </>
  )
}

export default Carrito