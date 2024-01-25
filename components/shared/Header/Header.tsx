'use client'

import Link from "next/link"
import Image from 'next/image'
import styles from './Header.module.css'

export const Header = () => {
    return (
        <Link href={"./"} className={styles.title}>
          <Image 
            src={require("@/public/images/CatwikiLogo.svg")} 
            alt={''} height={42.67} 
            width={127.72}
          />
        </Link>
    )
}