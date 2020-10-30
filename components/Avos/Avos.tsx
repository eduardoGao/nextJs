import React from 'react'
import Link from "next/link"

import styles from './Avos.module.css'

const Avos = ({ name, taste, img, shape, link }) => {
    return(
        <div className={styles.avos}>
            <img src={img} alt="" className={styles.avos__image}/>
            <h2 className={styles.avos__title}>{name}</h2>
            <p>{taste}</p>
            <p>{shape}</p>
            <Link href={link}>
                <button>Más</button>
            </Link>
        </div>
    )
}

export default Avos;
