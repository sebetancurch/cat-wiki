'use client'

import { Autocomplete, Button, Chip } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';

export const AutocompleteField = ({ cats }: {cats: any[]}) => {

    const [selectedCat, setSelectedCat] = useState<string | null>('');

    return (
        <Autocomplete
            id="free-solo-with-text-demo"
            options={cats.map((cat: any) => {
                return cat.name
            })}
            onChange={(event: any, newValue: string | null) => {
                setSelectedCat(cats.find((cat) => cat.name == newValue).id);
            }}
            sx={{
                display: 'inline-block',
                '& input': {
                    width: 300,
                    height: 50,
                    borderRadius: '50px 0 0 50px',
                    color: (theme) =>
                    theme.palette.getContrastText(theme.palette.background.paper),
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
                    <input style={{padding: '10px'}} type="text" {...params.inputProps} />
                    <Button
                        style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            background: 'white', 
                            borderRadius: '0 50px 50px 0', 
                            height: '50px', 
                            width: '50px', 
                            justifyContent: 'center' }}
                        disabled={selectedCat == ''}
                        href={'../details/' + selectedCat}>
                        <Search color="action"/>
                    </Button>
                </div>
            )}
        />
    )
}