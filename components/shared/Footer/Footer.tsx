'use client'

import Image from 'next/image'
import styles from './Footer.module.css'

export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div>
          <Image style={{marginLeft: '80px'}} src={require("@/public/images/LogoWhite.svg")} alt={''} height={42.67} width={127.72}/>
        </div>
        <p style={{marginRight: '32px'}}>&copy; created by Sergio - devChallenge.io 2021</p>
      </footer>
    );
  };