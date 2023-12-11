'use client'

import React from 'react';
import CatInfo from '@/app/components/cat-info';

export default function List ({ cats }: { cats: any[] }) {

    return (
        <div>
            {
                cats.map((cat: any) => {
                    return (
                        <CatInfo cat={cat}/>
                    )
                })
            }
        </div>
    )
}