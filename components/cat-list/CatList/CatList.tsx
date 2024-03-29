'use client'

import React, { useState } from 'react';
import CatInfo from '@/components/shared/CatInfo/CatInfo';
import { Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function CatList ({ cats }: { cats: any[] }) {

    const [showedCats, setShowedCats] = useState<number>(10)

    function updateShowedCats(add: boolean) {
        setShowedCats(add ? showedCats + 10 : showedCats - 10)
    }

    function reduceButton() {
        if (showedCats > 10) {
            return (
                <Button sx={{border: 0, height: 'min-content', ":hover": {bgcolor: "inherit"}}}
                    variant='outlined' 
                    color='inherit' 
                    size='small'
                    onClick={() => updateShowedCats(false)} 
                    endIcon={<ArrowUpwardIcon/>}>
                    Show less
                </Button>
            )
        }
    }

    return (
        <>
            <div>
                {
                    cats.slice(0, showedCats).map((cat: any) => {
                        return (
                            <CatInfo key={cat.id} cat={cat}/>
                        )
                    })
                }
            </div>
            <div style={{display: 'flex'}}>
                <Button sx={{border: 0, height: 'min-content', ":hover": {bgcolor: "inherit"}}}
                    variant='outlined' 
                    color='inherit' 
                    size='small'
                    onClick={() => updateShowedCats(true)} 
                    endIcon={<ArrowDownwardIcon />}>
                    Show more
                </Button>
                {reduceButton()}
            </div>
        </>
    )
}