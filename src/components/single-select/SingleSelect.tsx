"use client";
import React, { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
    OutlinedInput, 
    InputLabel, 
    MenuItem, 
    FormControl
} from '@mui/material';
import { MenuProps, sxFormControl } from './styles';

interface MultipleSelectProps {
    items: string[];
    labelInput: string;
}

const SingleSelect = ( { items, labelInput }: MultipleSelectProps ) => {
    const [selectedItem, setSelectedItem] = useState<string>('');
    
    const handleChange = (event: SelectChangeEvent) => {
        setSelectedItem(event.target.value as string);
    };

    return (
        <FormControl sx={sxFormControl}>
            <InputLabel id="demo-single-select-label">{labelInput}</InputLabel>
            <Select
                labelId="demo-single-select-label"
                id="demo-single-select"
                value={selectedItem}
                onChange={handleChange}
                input={<OutlinedInput label={labelInput} />}
                MenuProps={MenuProps}
            >
                {items.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default SingleSelect;
