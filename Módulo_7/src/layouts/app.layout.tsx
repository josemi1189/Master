import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import * as classes from './app.layout.styles';
import { Link } from 'react-router-dom';
import { switchRoutes } from '#core/router/routes.js';
import { Box } from '@mui/material';

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" className={classes.toolbar}>
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>
          <Box component={'nav'} className={classes.nav}>
            <Link to={switchRoutes.characterCollection}>Home</Link>
            <Link to={switchRoutes.locationCollection}>Location</Link>
            <Link to={switchRoutes.episodeCollection}>Episodes</Link>
          </Box>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
