import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { useCutomTheme } from "../Providers/CustumThemeProvider";
import { useHistory } from "../Providers/HistoryProvider";
import { _GLOBAL_IDS, _TEXT } from "../Static/Strings";
import { HistoryRow, IRowData } from "./HistoryRow";
import PerfectScrollbar from "react-perfect-scrollbar";

export const HistoryLists = (props: { historys: IRowData[] }) => {
  const { color } = useCutomTheme();
  const { selectedRowItem, setSelectedRowItem } = useHistory();
  const { historys } = props;

  return (
    <Stack
      overflow="hidden"
      borderRadius="14px 14px 0 0"
      direction="column"
      flex={1}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        p={1}
        sx={{
          backgroundColor: color.disabled,
        }}
      >
        <Typography fontSize={14} color={color.white}>
          {_TEXT.HISTORY}
        </Typography>
      </Stack>
      <Stack
        sx={{
          flex: 1,
          backgroundColor: color.white,
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <PerfectScrollbar>
          <HistoryRow
            isHeader
            data={{
              id: _GLOBAL_IDS.columnHeader,
              client: _TEXT.CLIENT1,
              time: `${_TEXT.TIME}(mn)`,
              price: `${_TEXT.PRICE}(Ar)`,
              date: _TEXT.DATE,
            }}
          />
          {historys.map((historyItem) => (
            <HistoryRow
              isSelected={selectedRowItem === historyItem.id}
              onClick={() => {
                setSelectedRowItem(historyItem.id);
              }}
              data={historyItem}
              key={`history-row-item-id-${historyItem.id}`}
            />
          ))}
        </PerfectScrollbar>
      </Stack>
    </Stack>
  );
};
