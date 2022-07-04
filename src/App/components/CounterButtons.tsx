import * as React from 'react';
import { Stack } from '@mui/material';
import { useTimer } from '../Providers/UserTimerProvider';
import { CounterButton } from './CounterButton';
import { playIcon } from '../../assets/images/play';
import { pauseIcon } from '../../assets/images/pause';
import { resetIcon } from '../../assets/images/reset';

enum EButtonState {
  PLAYED,
  PAUSED,
  RESETED,
}

export const CounterButtonsContainer = () => {
  const [currentState, setCurrentState] = React.useState<EButtonState>(
    EButtonState.RESETED
  );
  const { start, pause, reset } = useTimer();

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <CounterButton
        isActive={currentState === EButtonState.PAUSED}
        image={pauseIcon}
        alt="pause"
        onPress={() => {
          pause();
          setCurrentState(EButtonState.PAUSED);
          // console.log('pause pressed.');
        }}
      />
      <CounterButton
        isActive={currentState === EButtonState.PLAYED}
        image={playIcon}
        alt="play"
        onPress={() => {
          start();
          setCurrentState(EButtonState.PLAYED);
          // console.log('play pressed.');
        }}
      />
      <CounterButton
        isActive={currentState === EButtonState.RESETED}
        image={resetIcon}
        alt="reset"
        onPress={() => {
          reset(undefined, false);
          setCurrentState(EButtonState.RESETED);
          // console.log('reset pressed.');
        }}
      />
    </Stack>
  );
};
