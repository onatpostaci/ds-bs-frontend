"use client"
import React from 'react';
import { Box, AppBar, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { appBarStyles } from './styles';

const DashboardTopbar = () => {
  return (
    <Box>
    <AppBar
      position="fixed"
      elevation={0}
      sx={appBarStyles}
    >
        <Box
          display="flex"
          bgcolor={'transparent'}
          borderRadius="3px"
        >
            
              <IconButton type="button" sx={{ p: 1 }}>
                <SearchIcon />
              </IconButton>

        </Box>
    </AppBar>
    </Box>
  )
}

export default DashboardTopbar