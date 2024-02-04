import React from 'react'
import { Box, CircularProgress, LinearProgress } from '@mui/material'

const Loader = () => {
  return (
    <Box sx={{display: 'flex', alignItems:'center', justifyContent:'center', height:'100%', width:'100%'}}>
        <CircularProgress color="inherit" />
    </Box>
  )
}

export default Loader