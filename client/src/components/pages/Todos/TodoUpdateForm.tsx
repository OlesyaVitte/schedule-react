import React, { FC } from "react";
import { useFormik } from "formik";

type Props = {
  initialValues: any;
  handleSubmit: any;
};
const TodoUpdateForm: FC<Props> = ({ handleSubmit }) => {
  // @ts-ignore
  const onSubmit = () => handleSubmit();

  return (
    <form onSubmit={handleSubmit}>
      {/* {createField<t.formKeys>(
        "text",
        "What you'll to do?",
        [required, maxLengthTodo],
        Input,
        { autoFocus: true, onBlur: onSubmit }
      )} */}
    </form>
  );
};

export default TodoUpdateForm;
