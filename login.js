import React from 'react';
import {
  Container,
  CssBaseline,
  Typography,
  TextField,
  Button,
  Link,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const PharmacyLogin = () => {
  const handleLogin = () => {};

  return (
    <div
      style={{
        background: 'url("https://cutewallpaper.org/21/xanax-wallpapers/Fatal-Overdoses-Rising-From-Sedatives-Like-Valium-.jpg")',
        backgroundSize: 'cover',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>
            <IconButton edge="start" color="inherit" aria-label="instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton edge="start" color="inherit" aria-label="facebook">
              <FacebookIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Container
        component="main"
        maxWidth="xs"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          className="login-form"
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '16px',
            borderRadius: '8px',
          }}
        >
          <div className="login" style={{ textAlign: 'center' }}>
            <Typography variant="h5">Sign In</Typography>
            <div className="inputbox" style={{ margin: '8px 0' }}>
              <TextField
                type="text"
                label="Username"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
            </div>
            <div className="inputbox" style={{ margin: '8px 0' }}>
              <TextField
                type="password"
                label="Password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
            </div>
            <div className="inputbox" style={{ margin: '16px 0' }}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
            <div className="bottom-content" style={{ margin: '8px 0' }}>
              <Link href="#" variant="body2">
                Forgot Password
              </Link>
              <Link href="#" variant="body2">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </Container>

      <Divider variant="middle" style={{ margin: '20px 0' }} />

      <Container maxWidth="xs" style={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="body2" color="">
          © 2023 Your Pharmacy. All rights reserved.
        </Typography>
      </Container>
    </div>
  );
};

export default PharmacyLogin;
