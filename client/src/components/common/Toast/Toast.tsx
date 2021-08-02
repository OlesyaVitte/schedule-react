import React, { FC } from "react";
import classNames from "classnames";

import s from "./Toast.module.sass";

type Props = {
  isToast: boolean;
  text: string;
  toastType?: string;
};
const Toast: FC<Props> = ({ isToast, toastType, text }) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className={classNames(s.toast, { show: isToast }, toastType)}
    >
      <div className={s.body}>{text}</div>
    </div>
  );
};
export default Toast;
