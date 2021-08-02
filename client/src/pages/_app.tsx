import React from "react";
import { appWithTranslation } from "next-i18next";

import "styles/app.sass";

import { MainLayout } from "../layouts/MainLayout/MainLayout";
import { wrapper } from "flux";

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default wrapper.withRedux(appWithTranslation(MyApp));
