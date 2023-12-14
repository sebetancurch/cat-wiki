'use client'

import CatInfo from '@/app/components/cat-info';

export default function List ({ cats }: { cats: any[] }) {

    return (
        <div>
            {
                cats.map((cat: any) => {
                    return (
                        <CatInfo key={cat.id} cat={cat}/>
                    )
                })
            }
        </div>
    )
}