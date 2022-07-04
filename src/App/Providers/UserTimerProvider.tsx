/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { useStopwatch } from 'react-timer-hook';
import { _DEFAULT_VALUE } from '../Static/Data';

const default_data = {
  clientName: 'Client',
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
  price: 0,
  isRunning: false,
  timeInMinuts: 0,
  start: () => {},
  pause: () => {},
  setClientName: (_clientName: string) => {},
  reset: (
    _offsetTimestamp?: Date | undefined,
    _autoStart?: boolean | undefined
  ) => {},
};

const TimerContext = React.createContext(default_data);

export const useTimer = () => React.useContext(TimerContext);

export const TimerProvider = (props: {
  children: React.ReactNode | JSX.Element;
}) => {
  const [clientName, setClientName] = React.useState('Client');
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } =
    useStopwatch({ autoStart: false });
  const timeInMinuts = minutes + hours * 60 + days * 24 * 60;
  const price = timeInMinuts * _DEFAULT_VALUE.price;
  const { children } = props;
  return (
    <TimerContext.Provider
      value={{
        clientName,
        setClientName,
        price,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
        timeInMinuts,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
