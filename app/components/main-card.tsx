'use client'

import Image from 'next/image'
import styles from '../page.module.css'
import { Mystery_Quest } from 'next/font/google';
import { Autocomplete, Button, Chip, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';

const mysteryQuest = Mystery_Quest({ 
        weight: '400', 
        subsets: ['latin'],
        style: 'normal'
    });

export default function MainCard ({cats, images}: {cats: any[], images: any[]}) {

    const router = useRouter();

    const [value] = useState<any | null>(null);

    return (
        <>
            <div className={styles.mainCard}>
                <div style={{fontSize: '64px'}} className={styles.kittenImage}>
                    <div style={{color: 'white', paddingTop: "5%", paddingLeft: '5%'}}>
                        <div style={{display:"flex"}}>
                            <p style={{fontSize: '64px'}} className={mysteryQuest.className}>CatWiki</p>
                            {/* <Image src={require("../../images/CatImage.svg")} alt={''} height={42.67} width={127.72}/> */}
                        </div>
                        <p style={{fontSize: '24px', fontWeight: '500'}}>Get to know more about your cat breed</p>
                        <Autocomplete
                            value={value}
                            id="free-solo-with-text-demo"
                            options={cats.map((cat: any) => {
                                return cat.name
                            })}
                            sx={{ width: 300, borderRadius: '50px'}}
                            renderOption={(props, option) => {
                                return (
                                    <li {...props} key={option}>
                                    {option}
                                    </li>
                                )
                            }}
                            renderTags={(tagValue, getTagProps) => {
                                return tagValue.map((option, index) => (
                                    <Chip {...getTagProps({ index })} key={option} label={option} />
                                ))
                            }}
                            renderInput={(params) => (
                                <TextField {...params} sx={{backgroundColor: 'white', borderRadius: '15px'}} label="Enter your breed" />
                            )}
                            />
                    </div>
                </div>
                <div className={styles.mainInfo}>
                    <div style={{margin: '6%'}}>
                        <p style={{fontWeight: 500, fontSize: '18px'}}>Most searched Breeds</p>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline'}}>
                        <p style={{fontWeight: 700, fontSize: '48px'}}>66+ Breeds for you to discober</p>
                        <Button sx={{border: 0, height: 'min-content', ":hover": {bgcolor: "inherit"}}}
                            variant='outlined' 
                            color='inherit' 
                            size='small' 
                            onClick={()=>{router.push('/cat-list')}}
                            endIcon={<ArrowForwardIcon />}>
                            See more
                        </Button>
                        </div>
                        <div className={styles.catsList}>
                        {
                            images.map((cat: any) => {
                                return (
                                    <div key={cat.id}>
                                        <Button
                                            sx={{padding: '0px', borderRadius: '24px'}}
                                            variant='contained'
                                            onClick={()=>{router.push('/details/'+cat.id)}}>
                                            <Image
                                                style={{borderRadius: '24px'}}
                                                src={cat.url}
                                                width={220}
                                                height={220}
                                                alt="Picture of kitten"/>
                                        </Button>
                                        <label>{cat.name}</label>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', margin: '100px'}}>
                <div style={{flex: '1'}}>
                <p style={{fontWeight: 700, fontSize: '48px'}}>
                    Why should you have a cat?
                </p>
                <p style={{fontWeight: 500, fontSize: '18px'}}>
                    Having a cat around you can actually trigger the
                    realise of claiming chemicals  in your body wich
                    lower your stress and anxiety levels
                </p>
                <Button sx={{border: 0, height: 'min-content', ":hover": {bgcolor: "inherit"}}}
                    variant='outlined' 
                    color='inherit' 
                    size='small' 
                    endIcon={<ArrowForwardIcon />}>
                    See more
                </Button>
                </div>
                <div style={{flex: '1'}}>
                    <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <div style={{display: 'flex',flexDirection: 'column', alignItems: 'flex-end'}}>           
                            <Image
                                style={{borderRadius: '24px'}}
                                src={require('../../images/image2.png')}
                                width={273}
                                height={167}
                                alt="Picture of kitten"/>
                            <Image
                                style={{borderRadius: '24px'}}
                                src={require('../../images/image1.png')}
                                width={195}
                                height={293}
                                alt="Picture of kitten"/>
                        </div>
                        <Image
                            style={{borderRadius: '24px'}}
                            src={require('../../images/image3.png')}
                            width={238}
                            height={385}
                            alt="Picture of kitten"/>
                    </div>
                </div>
            </div>
        </>
    )
}