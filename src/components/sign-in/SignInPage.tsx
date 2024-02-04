// pages/signin.tsx
import * as React from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const SignInPage = () => {
  return (
    <Container maxWidth="sm" sx={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
      <Box sx={{ width: '100%', padding: 3, boxShadow: 3 }}>
        {/* Left Side - Welcome Message */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Welcome Page
          </Typography>
          <Typography variant="body2" gutterBottom>
            Sign in to continue access
          </Typography>
        </Box>
        {/* Sign In Form */}
        <Box component="form" noValidate autoComplete="off">
          <TextField fullWidth label="Email Address" margin="normal" />
          <TextField fullWidth label="Password" type="password" margin="normal" />
          <Button fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
            Continue
          </Button>
        </Box>
        {/* Social Media Sign In */}
        <Typography variant="body2" align="center" sx={{ mb: 2 }}>
          or Connect with Social Media
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton color="primary" component="span">
            <TwitterIcon />
          </IconButton>
          <IconButton color="primary" component="span">
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};

export default SignInPage;
