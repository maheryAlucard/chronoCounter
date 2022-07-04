import * as React from "react";
import { Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useCutomTheme } from "../Providers/CustumThemeProvider";

export const CounterTitle = (props: { title: string }) => {
  const { title } = props;
  const classes = useStyles();
  const { color } = useCutomTheme();

  return (
    <Stack className={classes.container} direction="column">
      <Typography color={color.white} fontWeight="bold">
        {title}
      </Typography>
    </Stack>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
}));
