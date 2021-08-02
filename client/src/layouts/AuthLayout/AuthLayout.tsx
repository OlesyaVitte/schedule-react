import { FC } from "react";
import { ReactNode } from "react";

import s from "./AuthLayout.module.sass";

import { Card } from "components/common/Card/Card";

type Props = {
  children: ReactNode;
};
export const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Card className={s.card}>{children}</Card>
    </div>
  );
};
