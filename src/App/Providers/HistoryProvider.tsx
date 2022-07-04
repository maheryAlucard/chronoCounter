/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import { IRowData } from '../components/HistoryRow';
import { _GLOBAL_IDS } from '../Static/Strings';

const defaultData = {
  historyList: [] as IRowData[],
  setHistoryList: (_list: IRowData[]) => {},
  addHistory: (_history: Omit<IRowData, 'id'>) => {},
  deleteHistory: (_id: string) => {},
  selectedRowItem: null as null | string,
  setSelectedRowItem: (_id: null | string) => {},
};

export const HistoryContext = React.createContext(defaultData);

export const useHistory = () => React.useContext(HistoryContext);

export const HistoryProvider = (props: {
  children: React.ReactNode | JSX.Element;
}) => {
  const [historyList, setHistoryList] = React.useState<IRowData[]>([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedRowItem, setSelectedRowItem] = React.useState<null | string>(
    null
  );
  const addHistory = (history: Omit<IRowData, 'id'>) => {
    const id = _GLOBAL_IDS.rowBaseId + currentIndex;
    setCurrentIndex((curr) => curr + 1);
    setHistoryList((curr) => [{ ...history, id }, ...curr]);
  };
  const deleteHistory = (id: string) => {
    setHistoryList((curr) => curr.filter((row) => row.id !== id));
  };

  const { children } = props;
  return (
    <HistoryContext.Provider
      value={{
        historyList,
        setHistoryList,
        addHistory,
        deleteHistory,
        selectedRowItem,
        setSelectedRowItem,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};
