import { DashboardTopbar, Sidebar } from '@/components'
import { Box, Stack } from '@mui/material'
import React from 'react'

const DashboardLayout  = ({ children }: {
    children: React.ReactNode;
  }) => {
  return (
    <Stack direction={'row'}>
        <Sidebar/>
        <Box sx={{display: "flex", flexDirection:"column", alignItems:"center", gap:"4rem", width:"100%", height:"auto"}}>
            <DashboardTopbar />
            {children}
        </Box>   
    </Stack>
  )
}

export default DashboardLayout;