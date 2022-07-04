import * as React from 'react';
import { Grid } from '@mui/material';
import { CounterElement } from './CounterElement';
import { HistoryElement } from './HistroryElement';

export const MainElementContainer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <CounterElement />
      </Grid>
      <Grid item xs={5}>
        <HistoryElement />
      </Grid>
    </Grid>
  );
};
