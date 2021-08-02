import { useRouter } from "next/dist/client/router";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "flux";
import { NextComponentType, NextPageContext } from "next";

export const withAuthRedirect = (
  Component: NextComponentType<NextPageContext, any, {}>
) => {
  const RedirectComponent = (props: any) => {
    const router = useRouter();
    const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

    useEffect(() => {
      if (!loggedIn) {
        if (router.asPath !== "/login" && router.asPath !== "/register") {
          router.push("/login");
        }
      } else {
        if (
          router.asPath === "/login" ||
          router.asPath === "/register" ||
          router.asPath === "/"
        ) {
          router.push("/todos");
        }
      }
    }, []);

    return <Component {...props} />;
  };
  return RedirectComponent;
};
