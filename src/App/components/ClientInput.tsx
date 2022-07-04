import * as React from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useTimer } from '../Providers/UserTimerProvider';
import { _TEXT } from '../Static/Strings';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#7a0202',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#7a0202',
  },
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: 50,
    '& fieldset': {
      borderColor: 'red',
      boxShadow: '7px 7px 24px -6px rgba(0,0,0,0.73)',
      color: '#7a0202',
    },
    '&:hover fieldset': {
      borderColor: '#540303',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#7a0202',
    },
  },
});

export const ClientInput = () => {
  const classes = useStyles();
  const { clientName, setClientName } = useTimer();
  return (
    <Stack direction="column" spacing={1}>
      <Typography fontWeight="bold" fontSize={12}>
        {_TEXT.CLIENT}
      </Typography>
      <CssTextField
        value={clientName}
        onChange={(e) => {
          setClientName(e.target.value);
        }}
        className={classes.inputText}
        fullWidth
        id="client-input-field"
        size="small"
      />
    </Stack>
  );
};

const useStyles = makeStyles(() => ({
  inputText: {
    borderRadius: 50,
  },
}));
