import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
export const Home = () => {
    const classes = useStyles();
    return (
        <Box className={classes.boxContainer}>
            <img src={"assets/images/bgimage.jpg"} alt="background image" />
            Hello world
        </Box>
    );
}

const useStyles = makeStyles(() => ({
    boxContainer: {
        backgroundColor: '#ff0000',
        flex: 1,
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url("assets/images/bgimage.jpg")',
    }
}))