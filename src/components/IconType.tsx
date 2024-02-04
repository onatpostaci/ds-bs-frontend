import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

interface IProps {
    icon: React.ReactNode;
    typography: string;
    onClickButton?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconType = ({ icon, typography, onClickButton }: IProps) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <IconButton sx={{borderRadius: '2px'}} onClick={onClickButton}>
            {icon}
            <Typography>
                {typography}
            </Typography>
        </IconButton>
    </Box>
  )
}

export default IconType;