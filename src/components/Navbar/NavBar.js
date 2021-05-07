import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CartWidget from '../CartWidget/CartWidget';
import '../Navbar/NavBar.css'

const useStyles = makeStyles((theme) => ({
  OffSet: theme.mixins.toolbar 
  
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <Typography variant="h2" className={classes.title}>
            Kusikuy
          </Typography>
          <CartWidget />
          </IconButton>
          <Button variant="contained" color="primary"><Typography variant="h5" className={classes.title}>
            News
          </Typography></Button>
          <Button variant="contained" color="primary"><Typography variant="h5" className={classes.title}>
            Photos
            </Typography></Button>
            <Button variant="contained" color="primary"><Typography variant="h5" className={classes.title}>
            FAQ's
          </Typography></Button>
          <Button variant="contained" color="primary"><Typography variant="h5" className={classes.title}>
            How can I get there?
          </Typography></Button>
          <Button variant="contained" align="right">
            Login 
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.OffSet}></div>
    </div>
  );
}