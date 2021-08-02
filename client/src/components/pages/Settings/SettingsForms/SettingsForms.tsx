import React, { FC } from "react";

type Props = {
  handleSubmit: () => void;
};
export const SettingsFormName: FC<Props> = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    {/* {createField("name", undefined, [required], Input, {
      autoFocus: true,
      onBlur: handleSubmit,
    })} */}
    <button className="btn btn-secondary">update</button>
  </form>
);
