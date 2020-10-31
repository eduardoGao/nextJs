import React from 'react'
import Link from 'next/link'

import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <div className={styles.navbar__logo}>
          <img src="https://img.icons8.com/bubbles/50/000000/avocado.png"/>
          <span>Avo Lover</span>
        </div>
      </Link>
      <menu className={styles.menu}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </menu>
    </nav>
  )
}
