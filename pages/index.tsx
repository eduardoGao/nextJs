import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Avos from "../components/Avos/Avos";

const HomePage = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <main>

      {/* {productList.map((product) => (
        <div key={product.id}>
          <h2>Nombre: {product.name}</h2>
          <Link href={`/product/${product.id}`}><a>Detalles</a></Link>
        </div>
      ))} */}

      {productList.map((product) => (
        <Avos
          key={product.id} 
          name={product.name}
          img={product.image} 
          taste={product.attributes.taste}
          shape={product.attributes.shape}
          link={`/product/${product.id}`}
        />
      ))
      }

    </main>
  )
}

export default HomePage
