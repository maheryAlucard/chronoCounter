import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useTimer } from '../Providers/UserTimerProvider';
import { addZeroToLowerToTen } from '../Utils/Numbers';

export const TimeCounter = () => {
  const classes = useStyles();
  const { price, seconds, minutes, hours } = useTimer();
  return (
    <Stack className={classes.container} direction="column">
      <Box className={classes.timeContainer}>
        <Typography fontSize={32}>{`${addZeroToLowerToTen(
          hours
        )} : ${addZeroToLowerToTen(minutes)} : ${addZeroToLowerToTen(
          seconds
        )}`}</Typography>
      </Box>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        <Box className={classes.priceContainer}>
          <Typography mr={4} fontSize={24}>
            {price.toLocaleString()} Ar
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    overflow: 'hidden',
    borderRadius: 20,
    boxShadow: '7px 7px 24px -6px rgba(0,0,0,0.73)',
    display: 'flex',
  },
  timeContainer: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    paddingBottom: 18,
  },
  priceContainer: {
    width: '55%',
    backgroundColor: '#212121',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    color: '#ffffff',
  },
}));
