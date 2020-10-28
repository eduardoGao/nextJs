import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar/Navbar'

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
    <div>
      <div>Platzi and Next.js!</div>

      {productList.map((product) => (
        <div key={product.id}>
          <h2>Nombre: {product.name}</h2>
          <Link href={`/product/${product.id}`}><a>Detalles</a></Link>
        </div>
      ))}
    </div>
  )
}

export default HomePage
