import * as React from 'react';
import { Stack } from '@mui/material';
import { useHistory } from '../Providers/HistoryProvider';
import { useTimer } from '../Providers/UserTimerProvider';
import { _TEXT } from '../Static/Strings';
import { formatDate } from '../Utils/Dates';
import { SaveAsXlsx } from '../Utils/File';
import { CounterButton } from './CounterButton';
import { HistoryLists } from './HistoryList';

export const HistoryElement = () => {
  const { selectedRowItem, addHistory, deleteHistory, historyList } =
    useHistory();
  const { clientName, timeInMinuts, price } = useTimer();

  const addToHistrory = () => {
    addHistory({
      date: formatDate(new Date()),
      client: clientName,
      time: timeInMinuts,
      price,
    });
  };
  const deleteFromHistory = () => {
    if (selectedRowItem) deleteHistory(selectedRowItem);
  };
  const saveHistory = () => {
    SaveAsXlsx(historyList);
  };

  return (
    <Stack
      pt={3}
      pl={2}
      pr={2}
      maxHeight="380px"
      minHeight="380px"
      direction="column"
      spacing={1}
    >
      <HistoryLists historys={historyList} />
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <CounterButton
          mw={50}
          fz={10}
          onPress={addToHistrory}
          alt={_TEXT.ADD}
        />
        <CounterButton mw={50} fz={10} onPress={saveHistory} alt={_TEXT.SAVE} />
        <CounterButton
          mw={50}
          fz={10}
          onPress={deleteFromHistory}
          alt={_TEXT.DELETE}
        />
      </Stack>
    </Stack>
  );
};
