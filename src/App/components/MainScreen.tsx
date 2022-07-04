import * as React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { background } from '../../assets/images/bacground';

export const MainScreen = (props: {
  children: JSX.Element | React.ReactNode;
}) => {
  const { children } = props;
  const classes = useStyles();

  return <Box className={classes.container}>{children}</Box>;
};

const useStyles = makeStyles(() => ({
  container: {
    backgroundImage: background,
    flex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
