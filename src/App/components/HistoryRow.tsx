/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Divider, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useCutomTheme } from '../Providers/CustumThemeProvider';

export interface IRowData {
  id: string;
  client: any;
  time: any;
  date: any;
  price: any;
}

export const HistoryRow = (props: {
  isHeader?: boolean;
  isSelected?: boolean;
  data: IRowData;
  onClick?: () => void;
}) => {
  const { isSelected, data, onClick, isHeader } = props;
  const { color } = useCutomTheme();
  const classes = useStyles();

  const fontWeight = isHeader ? 'bold' : undefined;
  const fontSize = isHeader ? 14 : 12;
  const fontColor = isHeader ? color.primary : color.fourth;

  return (
    <Grid
      onClick={onClick}
      container
      sx={{
        backgroundColor: isSelected ? color.disabled : color.white,
        padding: 1,
        cursor: isHeader ? undefined : 'pointer',
      }}
    >
      <Grid className={isHeader ? classes.headerItem : undefined} item xs={3}>
        <Typography
          fontWeight={fontWeight}
          fontSize={fontSize}
          color={fontColor}
        >
          {data.client}
        </Typography>
      </Grid>
      <Grid
        className={isHeader ? classes.headerItem : classes.centerCell}
        item
        xs={2}
      >
        <Typography
          fontWeight={fontWeight}
          fontSize={fontSize}
          color={fontColor}
        >
          {data.time}
        </Typography>
      </Grid>
      <Grid
        className={isHeader ? classes.headerItem : classes.centerCell}
        item
        xs={4}
      >
        <Typography
          fontWeight={fontWeight}
          fontSize={fontSize}
          color={fontColor}
        >
          {data.date}
        </Typography>
      </Grid>
      <Grid
        className={isHeader ? classes.headerItem : classes.numberItem}
        item
        xs={3}
      >
        <Typography
          fontWeight={fontWeight}
          fontSize={fontSize}
          color={fontColor}
        >
          {data.price}
        </Typography>
      </Grid>
      {isHeader && (
        <Grid item xs={12}>
          <Divider />
        </Grid>
      )}
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  headerItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  centerCell: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
