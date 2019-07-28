import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyle = makeStyles((theme: Theme) => createStyles({
  centered: {
    textAlign: 'center'
  }
}));

const Main: React.FC = () => {
  const classes = useStyle();
  return (
    <div className={classes.centered} >
      <p><span>Hello World!</span></p>
    </div >
  );
  // return (
  //   <div className={classes.root}>
  //     <AppBar position="fixed" className={classes.appBar}>
  //       <Toolbar>
  //         <IconButton edge="start" className={classes.menuButton} onClick={(e) => setSideBarOpen(!sideBarOpen)}>
  //           <MenuIcon />
  //         </IconButton>
  //         <Typography variant="h6" color="inherit" className={classes.title}>
  //           Test
  //         </Typography>
  //         <Button color="inherit">Login</Button>
  //       </Toolbar>
  //     </AppBar>
  //     <Sidebar open={sideBarOpen} changeState={setSideBarOpen}></Sidebar>
  //   </div>
  // );
};

export default Main;