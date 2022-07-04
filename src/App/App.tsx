import * as React from 'react';
import "./App.css";
import { MainElementContainer } from "./components/MainElementContainer";
import { MainScreen } from "./components/MainScreen";
import { Providers } from "./Providers";

export default function App() {
  return (
    <Providers>
      <MainScreen>
        <MainElementContainer />
      </MainScreen>
    </Providers>
  );
}
