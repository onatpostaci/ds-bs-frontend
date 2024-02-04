import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Box, Stack } from '@mui/material'
import { Sidebar, DashboardTopbar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UE and Avron Global',
  description: 'Generated by create next app',
  icons: {
    icon: '/UE-logo-removebg-preview.png',
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Stack direction={'row'}>
          <Sidebar/>
            <Box sx={{display: "flex", flexDirection:"column", gap:"4rem", width:"100%", height:"auto"}}>
              <DashboardTopbar />
              {children}
            </Box>   
        </Stack>
        </body>
    </html>
  )
}
