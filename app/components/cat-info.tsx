'use client'

import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

export default function CatInfo ({ cat }: { cat: any }) {

    return (
        <Link href={'../details/' + cat.id} style={{display: 'flex'}}>
            <Image
                style={{borderRadius: '24px', margin: '50px 70px'}}
                src={cat.image.url}
                width={171}
                height={171}
                alt="Picture of kitten"/>
            <div style={{maxWidth: '80%'}}>
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