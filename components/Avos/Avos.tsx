import React from 'react'
import Link from "next/link"

const Avos = ({ name, taste, img, shape, link }) => {
    return(
        <div>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>{taste}</p>
            <p>{shape}</p>
            <Link href={link}>
                <button>Más</button>
            </Link>
        </div>
    )
}

export default Avos;
