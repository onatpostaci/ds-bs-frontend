import { SxProps } from '@mui/system';
import { useTheme } from '@mui/material';


export const appBarStyles: SxProps = {
    display: 'flex',
    width: `calc(100% - 240px)`,
    justifyContent: 'space-between',
    flexDirection: 'row',
 
    backgroundColor:'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(6px)',
    alignItems: 'center',
    height: '60px',
    padding: '0px 16px',
}