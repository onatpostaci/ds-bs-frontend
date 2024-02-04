import { Accordion,
         AccordionSummary,
         Typography,
         AccordionDetails,
         List,
         ListItem,
         ListItemIcon,
         ListItemText 
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import Link from "next/link";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';

interface IProps{
    itemType: string;
    to: string;
    label: string;
    icon: React.ReactNode;
    open: boolean;
    accordionList?: string[]; 
    isActive?: boolean;
};

const SidebarItem = (
    {   itemType, 
        to, 
        label, 
        icon, 
        open, 
        accordionList, 
        isActive = false, 
    }: IProps) => {

  return (
    <> 
      { itemType === "accordion" 
        ?  
        <ListItem 
            button 
            sx={{
                padding: 0,
                '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)', // or any color you want
                '& .MuiAccordion-root': {
                    backgroundColor: 'transparent', // This will make the accordion transparent on hover
                }
                },
            }}>
            <Accordion elevation={0} sx={{ width: '100%', backgroundColor: 'transparent' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left',
                    justifyContent: open ? 'normal' : 'center', // Center icon when sidebar is collapsed
                    '& .MuiAccordionSummary-content': {
                        margin: 0,
                    },
  
                    }}
                >
                    <ListItemIcon sx={ open ? { minWidth:'56px' } : {minWidth:0}}>
                        {icon}
                    </ListItemIcon>
                    {open && <Typography>{label}</Typography>}
                </AccordionSummary>
                <AccordionDetails>
                    {accordionList &&  
                        <List>
                            {accordionList.map((text, index) => (
                                <Link href={to} key={index}>
                                    <ListItem 
                                        button 
                                        sx={ 
                                            isActive
                                                ? {
                                                    backgroundColor: 'rgba(0, 0, 0, 0.04)', // Add your hover styles here
                                                }
                                                : {}
                                        }
                                    >
                                        {open && <ListItemText primary={text} />} {/* This will only render the text when the sidebar is open */}
                                    </ListItem>
                                </Link>
                            ))}
                        </List> 
                    }

            
                </AccordionDetails>
            </Accordion>
        </ListItem>
        
        :
        <Link href={to}>
            <ListItem 
                button
                sx={ 
                    isActive
                ? {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)', // Add your hover styles here
                }
                : {}}
            >
                <ListItemIcon>
                {icon}
                </ListItemIcon>
                {open && <ListItemText primary={label} />} {/* This will only render the text when the sidebar is open */}
            </ListItem>

        </Link>
       
      }
    </>
  
  )
}

export default SidebarItem