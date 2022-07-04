import * as React from 'react';
import { _COLORS } from '../Static/Colors';

const default_data = {
  color: _COLORS,
  setColor: (c: typeof _COLORS) => {
    console.log(c);
  },
};

const CustomThemContext = React.createContext(default_data);

export const useCutomTheme = () => React.useContext(CustomThemContext);

export const CustomThemeProvider = (props: {
  children: React.ReactNode | JSX.Element;
}) => {
  const { children } = props;
  const [color, setColor] = React.useState(_COLORS);

  return (
    <CustomThemContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </CustomThemContext.Provider>
  );
};
