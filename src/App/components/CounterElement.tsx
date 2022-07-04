import * as React from 'react';
import { Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { _TEXT } from '../Static/Strings';
import { ClientInput } from './ClientInput';
import { CounterButtonsContainer } from './CounterButtons';
import { CounterTitle } from './CounterTitle';
import { TimeCounter } from './TimeCounter';
import { logoImage } from '../../assets/images/logo';

export const CounterElement = () => {
  const classes = useStyles();
  return (
    <Stack className={classes.container} direction="column" spacing={2}>
      <CounterTitle title={_TEXT.TITLE} />
      <ClientInput />
      <TimeCounter />
      <CounterButtonsContainer />
      <Stack alignItems="center" justifyContent="center">
        <img className={classes.logoItem} src={logoImage} alt="logo-item" />
      </Stack>
    </Stack>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: 24,
  },
  logoItem: {
    width: 75,
    height: 40,
  },
}));
