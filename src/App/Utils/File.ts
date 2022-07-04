/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/prefer-default-export */
import { IRowData } from '../components/HistoryRow';
import xlsx, { IJsonSheet } from 'json-as-xlsx';
import { _TEXT } from '../Static/Strings';
import { formatDate } from './Dates';

export const SaveAsXlsx = (table: IRowData[]) => {
  const currentDate = formatDate(new Date());
  const data: IJsonSheet[] = [
    {
      sheet: `Historique du: ${currentDate}`,
      columns: [
        { label: _TEXT.CLIENT1, value: 'client' },
        { label: `${_TEXT.TIME}(mn)`, value: 'time' },
        { label: `${_TEXT.PRICE}(Ar)`, value: 'price' },
        { label: _TEXT.DATE, value: 'date' },
      ],
      content: table as any[],
    },
  ];
  const settings = {
    fileName: `Historique du: ${currentDate}`, // Name of the resulting spreadsheet
    extraLength: 3, // A bigger number means that columns will be wider
    writeOptions: {}, // Style options from https://github.com/SheetJS/sheetjs#writing-options
  };
  xlsx(data, settings);
};
