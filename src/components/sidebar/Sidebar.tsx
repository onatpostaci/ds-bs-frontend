"use client";
import React, { useState } from 'react';
import { Drawer, List, Divider, ListItemIcon, ListItemText, IconButton, Typography, Box } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CallIcon from '@mui/icons-material/Call';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { styled, useTheme } from '@mui/material/styles';
import { SidebarItem } from '..';
import Image from 'next/image';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import SummarizeIcon from '@mui/icons-material/Summarize';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const drawerWidth = 240;
const miniDrawerWidth = 75;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('');

  const handleItemSelect = (itemLabel: string) => {
    setActiveItem(itemLabel);
  };

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : miniDrawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : miniDrawerWidth,
          boxSizing: 'border-box',
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box display="flex" flexDirection="column" height="100%">
        <Box flex="1">
          <DrawerHeader sx={{ justifyContent: 'space-between' }}>
            {open
              ? <Image src={'/ue-big-logo-removebg-preview.png'} alt={'pronet-logo'} width={150} height={120}/>
              : <Image src={'/UE-logo-removebg-preview.png'} alt={'pronet-mini-logo'} width={40} height={40}/>
            }
            <IconButton onClick={handleDrawerToggle}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {[
                {label: 'Dashboard', icon: <DashboardIcon />, to: "/"},
                {label: 'Answers', icon: <QuestionAnswerIcon />, to: "/answers"}, 
            ].map((element, index) => (
                <SidebarItem
                    key={index}
                    itemType='listItem' 
                    to={element.to}
                    label={element.label} 
                    icon={element.icon} 
                    open={open}
                    isActive={activeItem === element.label}
                />
            ))}
          </List>
          <Divider />
        </Box>

        <Typography variant="caption" sx={{ padding: theme.spacing(2), textAlign: 'center', fontWeight: 'bold' }}>
          © 2023 UE. All rights reserved.
        </Typography>
      </Box>
    </Drawer>
  );
}
