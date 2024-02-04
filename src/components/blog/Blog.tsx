import React from 'react';
import { BlogHeader } from '..';
import { Box, Typography } from '@mui/material';

interface BlogProps {
    title: string;
    blogTitle: string;
    paragraphs?: string[];
}

const Blog = ( {title, blogTitle, paragraphs} : BlogProps ) => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap:'2rem', width: '100%'}}>
        <BlogHeader title={title}/>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent:'center'}}>
                <Typography variant='h5' fontWeight={'bold'} fontStyle={'unset'}>
                    {blogTitle}
                </Typography>
            </Box>
            <Box>
                
            </Box>

        </Box>
    </Box>
  )
}

export default Blog