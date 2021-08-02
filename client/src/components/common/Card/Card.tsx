import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import s from "./Card.module.sass";

type Props = {
  children: ReactNode;
  className?: string;
};
export const Card: FC<Props> = ({ children, className }) => (
  <div className={classNames(s.wrapper, className)}>{children}</div>
);
