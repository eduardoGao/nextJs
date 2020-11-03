import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import Avos from "../components/Avos/Avos";

export async function getServerSideProps() {
  const res = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await res.json()

  return {
    props: {
      productList,
    }, // will be passed to the page component as props
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
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
