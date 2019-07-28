import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from './components/pages/Main';
import Test from './components/pages/Test';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuBar from './components/menubar/Menubar';
import MenuChoice from './components/menubar/MenuChoice';
import { Route, Switch } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const WEB_PAGE_TITLE = 'Royce Fan';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  }
}));


const App: React.FC = () => {
  const classes = useStyles();
  //const [sideBarOpen, setSideBarOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const changeTab = (e: React.ChangeEvent<{}>, newTabIdx: number) => {
    setSelectedTab(newTabIdx)
  };

  const pageTitle = (
    <Typography variant="h6" className={classes.title}>
      {WEB_PAGE_TITLE}
    </Typography>
  );
  return (
    <>
      <CssBaseline />
      <Helmet>
        <title>{WEB_PAGE_TITLE}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
      </Helmet>
      <div className={classes.root}>
        <MenuBar selected={selectedTab} title={WEB_PAGE_TITLE}>
          <MenuChoice to="/" label={pageTitle} id="menu-landing" className={classes.title} />
          <MenuChoice to="/home" label="Home" id="menu-tab-0" className={classes.menuButton} />
          <MenuChoice to="/test" label="Test" id="menu-tab-1" />
        </MenuBar>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/test" component={Test} />

        </Switch>
      </div>
    </>
  );
}

export default App;
