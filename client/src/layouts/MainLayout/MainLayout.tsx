import React from "react";
import { Provider, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";

import s from "./MainLayout.module.sass";
import { Footer, NavBar, Toast } from "../../components";
import { GlobalStyles } from "../../global";
import { RootState } from "flux";

type Props = {
  children: React.ReactNode;
};
export const MainLayout: React.FC<Props> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.app.theme);
  const isToast = useSelector((state: RootState) => state.toast.isToast);
  const toastType = useSelector((state: RootState) => state.toast.toastType);
  const toastText = useSelector((state: RootState) => state.toast.text);

  return (
    <ThemeProvider theme={{ theme: { main: theme } }}>
      <GlobalStyles />
      <div className={s.wrapper}>
        <NavBar />
        <div className="container">{children}</div>
        <Toast isToast={isToast} toastType={toastType} text={toastText} />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
