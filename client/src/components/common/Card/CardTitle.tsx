import React, { FC } from "react";
import classNames from "classnames";

import s from "./CardTitle.module.sass";

type Props = {
  text: string;
  className?: string;
};
export const CardTitle: FC<Props> = ({ text, className }) => (
  <div className={classNames(s.title, className)}>{text}</div>
);
