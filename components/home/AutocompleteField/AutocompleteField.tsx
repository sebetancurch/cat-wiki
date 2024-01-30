'use client'

import { Autocomplete, Button, Chip } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '500', 
    subsets: ['latin'],
    style: 'normal'
  })

export const AutocompleteField = ({ cats }: {cats: any[]}) => {

    const [selectedCat, setSelectedCat] = useState<string | null>('');

    return (
        <Autocomplete
            id="free-solo-with-text-demo"
            options={cats.map((cat: any) => {
                return cat.name
            })}
            onChange={(event: any, newValue: string | null) => {
                setSelectedCat(cats.find((cat) => cat.name == newValue)?.id || ' ');
            }}
            sx={{
                display: 'inline-block',
                '& input': {
                    width: 300,
                    height: 50,
                    borderRadius: '50px 0 0 50px',
                    padding: '0 0 0 20px',
                    border: 'none',
                    fontWeight: '500',
                    fontSize: '18px',
                    '&.focused': {
                        borderColor: 'none',
                        boxShadow: 0,
                    },
                    '&:hover': {
                        borderColor: 'none',
                    },
                    '&:focus-visible': {
                        outline: 0,
                    },
                },
            }}
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
                <div style={{ display: 'flex', alignItems: 'center', height: '50px' }} ref={params.InputProps.ref}>
                    <input type="text" {...params.inputProps} />
                    <Button
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            background: 'white', 
                            borderRadius: '0 50px 50px 0', 
                            height: '50px', 
                            width: '50px',
                            justifyContent: 'center'}}
                        disabled={selectedCat == ''}
                        href={'../details/' + selectedCat}>
                        <Search color="action"/>
                    </Button>
                </div>
            )}
        />
    )
}