'use client'

import Image from 'next/image'
import styles from '../page.module.css'
import { Mystery_Quest } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CatInfo from '@/app/components/cat-info';
import { Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function FullList ({ cats }: { cats: any[] }) {

    const [showedCats, setShowedCats] = useState<number>(10)

    const updateShowedCats = () => {
        setShowedCats(showedCats + 10)
    }

    return (
        <>
            <div>
                {
                    cats.slice(0, showedCats).map((cat: any) => {
                        return (
                            <CatInfo cat={cat}/>
                        )
                    })
                }
            </div>
            <Button sx={{border: 0, height: 'min-content', ":hover": {bgcolor: "inherit"}}}
                variant='outlined' 
                color='inherit' 
                size='small'
                onClick={updateShowedCats} 
                endIcon={<ArrowDownwardIcon />}>
                Show more
            </Button>
        </>
    )
}