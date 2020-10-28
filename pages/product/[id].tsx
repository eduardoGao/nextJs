import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [avo, setAvo] = useState<TProduct>()

  const { query } = useRouter()

  useEffect(() => {
    if (query.id) {
      window
        .fetch(`/api/avo/${query.id}`)
        .then((response) => response.json())
        .then((data) => setAvo(data))
    }
  }, [query])
  // console.log(avo)

  return (
    <section>
      <h1>Página producto: {avo?.name}</h1>
      <p>Descripción: {avo?.attributes.description}</p>
    </section>
  )
}

export default ProductPage
