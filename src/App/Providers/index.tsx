/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/prefer-default-export */

import React from 'react';
import { CustomThemeProvider } from './CustumThemeProvider';
import { HistoryProvider } from './HistoryProvider';
import { TimerProvider } from './UserTimerProvider';

export const Providers = (props: {
  children: React.ReactNode | JSX.Element;
}) => {
  const { children } = props;
  return (
    <CustomThemeProvider>
      <TimerProvider>
        <HistoryProvider>{children}</HistoryProvider>
      </TimerProvider>
    </CustomThemeProvider>
  );
};
