import React, { FC } from "react";
import { useFormik, FormikHelpers } from "formik";
import { useTranslation } from "next-i18next";
import { Input, Button } from "antd";

type Props = {
  handleSubmit: (text: string) => void;
};
const TodoCreateForm: FC<Props> = ({ handleSubmit }) => {
  const { t, i18n } = useTranslation();
  const initialValues = { text: "" };
  type FormType = typeof initialValues;

  const formik = useFormik({
    initialValues,
    onSubmit: ({ text }: FormType, { resetForm }: FormikHelpers<FormType>) => {
      handleSubmit(text);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="form mt-5">
      <Input name="text" placeholder={t("todo.create_todo_form.input")} />
      <Button htmlType="submit">{t("todo.create_todo_form.button")}</Button>
    </form>
  );
};

export default TodoCreateForm;
