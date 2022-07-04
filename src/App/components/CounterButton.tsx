import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useCutomTheme } from '../Providers/CustumThemeProvider';

export const CounterButton = (props: {
  image?: string;
  alt: string;
  onPress: () => void;
  isActive?: boolean;
  mw?: number;
  fz?: number;
}) => {
  const { image, onPress, alt, isActive, mw, fz } = props;
  const { color } = useCutomTheme();
  const classes = useStyles();
  const [mouseDown, setMouseDown] = React.useState(false);

  return (
    <Stack
      className={classes.container}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onClick={onPress}
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{
        backgroundColor: isActive
          ? color.disabled
          : mouseDown
          ? color.disabled
          : color.white,
        borderRadius: 25,
        cursor: 'pointer',
        boxShadow: !isActive
          ? mouseDown
            ? undefined
            : '7px 7px 24px -6px rgba(0,0,0,0.73)'
          : undefined,
      }}
      m={1}
      px={2}
      minWidth={mw ?? '75px'}
    >
      {image && <img className={classes.imageStyle} src={image} alt={alt} />}
      {!image && <Typography fontSize={fz}>{alt}</Typography>}
    </Stack>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    '&:hover': {
      backgroundColor: '#ffd4d4',
    },
  },
  imageStyle: {
    width: 12,
    height: 12,
    margin: 6,
  },
}));
