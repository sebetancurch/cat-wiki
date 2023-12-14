'use client'

import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import styles from '../page.module.css'

export default function CatInfo ({ cat }: { cat: any }) {

    return (
        <Link href={'../details/' + cat.image.id} className={styles.catInfoLink}>
            <Image
                style={{borderRadius: '24px', margin: '30px 10px'}}
                src={cat.image?.url}
                width={171}
                height={171}
                alt="Picture of kitten"/>
            <div style={{maxWidth: '80%', margin: '0 5%'}}>
                <p style={{fontWeight: '600px', fontSize: '36px'}}>
                    {cat.name}
                </p>
                <p>
                    {cat.description}
                </p>
            </div>
        </Link>
    )
}