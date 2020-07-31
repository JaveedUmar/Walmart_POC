import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h5" className={classes.typographyStyles}>Walmart</Typography>
            <Avatar alt="Remy Sharp" src="" />
        </Toolbar>
    </AppBar>
    );
};

export default Header;