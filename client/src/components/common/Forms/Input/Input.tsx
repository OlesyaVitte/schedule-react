import cn from "classnames";
import { FC, FormEvent } from "react";

import s from "./Input.module.sass";

type Props = {
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  type?: "password" | "text";
  value: string;
  name: string;
  placeholder: string;
  className?: string;
  fullWidth?: boolean;
};
export const Input: FC<Props> = ({
  onChange,
  type,
  name,
  value,
  placeholder,
  className,
  fullWidth,
}) => {
  return (
    <input
      onChange={onChange}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      className={cn(s.input, { fullWidth }, className)}
    />
  );
};
