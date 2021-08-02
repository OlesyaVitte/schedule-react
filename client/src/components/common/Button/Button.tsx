import React, { FC, ReactNode } from "react";
import classNames from "classnames";

import s from "./Button.module.sass";

type Props = {
  children: ReactNode;
  className?: string;
  htmlType?: "button" | "submit";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};
export const Button: FC<Props> = ({
  children,
  className,
  htmlType = "button",
  onClick,
  size = "md",
  fullWidth,
}) => (
  <button
    onClick={onClick}
    className={classNames(
      s.button,
      {
        [s.sm]: size === "sm",
        [s.md]: size === "md",
        [s.lg]: size === "lg",
        fullWidth,
      },
      className
    )}
    type={htmlType}
  >
    {children}
  </button>
);
