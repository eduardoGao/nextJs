import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from './product.module.css'

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
    <section className={styles.section}>
      <h1 className={styles.h1}>{avo?.name}</h1>
      <div className={styles.content}>
        
        <img src={avo?.image} alt="" className={styles.img} />
        
        <div className={styles.description}>
          <p>{avo?.attributes.description}</p>
          <h4>Price $ {avo?.price}</h4>
        </div>

      </div>
    </section>
  )
}

export default ProductPage
