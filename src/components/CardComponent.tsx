import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  CardMedia,
  CardActions,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Link from 'next/link';

interface CardComponentProps {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, subtitle, content, imageUrl }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'row', maxWidth: 450, maxHeight: 200 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" fontWeight={'bold'}>
            {title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {subtitle}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{padding:'16px'}}>
        <Link href="/learn-more" passHref>
            <button className="text-white bg-blue-500 hover:bg-blue-700 font-medium py-2 px-2 text-sm rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
                Learn More
            </button>
        </Link>
        </CardActions>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, objectFit:'cover' }}
        image={imageUrl}
        alt={title}
      />
    </Card>
  );
};

export default CardComponent;
