import { ValidatorType } from "../../../../../schedule-react/client/src/types";

export const required: ValidatorType = (value) =>
  value ? undefined : "Field is required";

export const minLength =
  (min: number): ValidatorType =>
  (value) =>
    value && value.length < min ? `Min characters: ${min}` : undefined;

export const maxLength =
  (max: number): ValidatorType =>
  (value) =>
    value && value.length > max ? `Max characters: ${max}` : undefined;
