import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    zIndex: theme.zIndex.modal + 1,
    //background: 'transparent',
    //boxShadow: 'none'
  },
  title: {
    flexGrow: 1,
  }
}));

type MenuBarProps = {
  selected: number,
  title: string,
  //onChange: (e: React.ChangeEvent<{}>, tabIdx: number) => void
}

const MenuBar: React.FC<MenuBarProps> = ({ children, selected, title }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;