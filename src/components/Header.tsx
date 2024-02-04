import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';

interface IProps{
    title: string;
    subtitle: string;
}
const Header = ({title, subtitle}: IProps) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h4"
        color={'black'}
        fontWeight="bold"
        sx={{ m: '0 0 5px 0' }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={'gray'}>
        {subtitle}
      </Typography>
    </Box>
  )
}

export default Header