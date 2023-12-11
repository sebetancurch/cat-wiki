'use client'

import Image from 'next/image'
import styles from '../page.module.css'
import { Mystery_Quest } from 'next/font/google';
import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import CatInfo from '@/app/components/cat-info';

export default function List ({ cats }: { cats: any[] }) {

    return (
        <div style={{display: 'flex'}}>
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