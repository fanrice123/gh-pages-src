import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
        width: '200px'
    },
    drawerContent: {
        width: 'auto'
    }
}));

interface Process {
    browser: boolean
}

declare var process: Process;


const Sidebar: React.FC<{ open: boolean, changeState: (arg: boolean) => void }> = ({ open, changeState }) => {
    const classes = useStyles();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const isStandAlone = window.matchMedia('(display-mode: standalone)').matches;

    const toggleSidebar = (updateState: (open: boolean) => void, open: boolean) => (
        (e: React.KeyboardEvent | React.MouseEvent) => {
            if (e && e.type === 'keydown' && (e as React.KeyboardEvent).key !== 'escape') {
                return;
            }

            updateState(open);
        }
    );
    return (
        <SwipeableDrawer open={open} onOpen={toggleSidebar(changeState, true)} onClose={toggleSidebar(changeState, false)}
            disableBackdropTransition={!iOS} disableDiscovery={iOS && !isStandAlone}
            disableSwipeToOpen={false}
        >
            <div className={classes.drawer}
                onKeyDown={toggleSidebar(changeState, false)}
                onClick={toggleSidebar(changeState, false)}
            >
                <List>
                    {['a', 'b', 'c'].map((text) => (
                        <ListItem button key={text}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </SwipeableDrawer>
    );
};

export default Sidebar;
