"use client";
import * as React from 'react';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

const StyledHeader = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
    height: '212px',
    backgroundColor: '#005a96',
    color: 'white',
    backgroundImage: 'url(/blockchain_inc_cover.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    borderRadius: '10px',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    '& > *': {
      position: 'relative',
      zIndex: 1,
    },
  });

interface HeaderProps {
  title: string;
  // Any other props you might need
}

const BlogHeader: React.FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <Typography variant="h5" gutterBottom fontWeight={'bold'}>
        {title}
      </Typography>
    </StyledHeader>
  );
};

export default BlogHeader;
