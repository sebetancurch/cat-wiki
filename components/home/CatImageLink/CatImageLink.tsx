'use client'

import Link from "next/link"
import Image from 'next/image'
import styles from './CatImageLink.module.css'

export const CatImageLink = ({ id, url }: {id: string, url: string}) => {
    return (
        <Link
            className={styles.link}
            href={'/details/'+id}>
            <Image
                className={styles.image}
                src={url}
                width={220}
                height={220}
                alt="Picture of kitten"/>
        </Link>
    )
}