import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return(
        <footer className={styles.footer}>
            
            <img className={styles.img} src="https://img.icons8.com/fluent/48/000000/guacamole.png"/>
            
            <h4>If you love avocados as me, follow me</h4>
           
        </footer>
    )
}

export default Footer;