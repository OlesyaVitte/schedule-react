import React, { FC } from "react";
import * as Yup from "yup";
import { useTranslation } from "next-i18next";

import s from "styles/pages/auth.module.sass";
import { Button } from "components";
import { FormikHelpers, useFormik } from "formik";
import { Input } from "components/common/Forms/Input/Input";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().max(255).required(),
  password: Yup.string().min(8).max(255).required(),
});

type Props = {
  handleSubmit: (data: { email: string; password: string }) => void;
};
export const LoginForm: FC<Props> = ({ handleSubmit }) => {
  const { t } = useTranslation("auth");
  const initialValues = { email: "", password: "" };
  type FormType = typeof initialValues;
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }: FormikHelpers<FormType>) => {
      handleSubmit(values);
      resetForm();
    },
  });
  const inputs = [
    { name: "email", value: formik.values.email, placeholder: t("email") },
    {
      // type: "password" as "password" | "text",
      name: "password",
      value: formik.values.password,
      placeholder: t("password"),
    },
  ];
  const showInputs = inputs.map((input) => (
    <Input
      onChange={formik.handleChange}
      {...input}
      fullWidth
      className={s.input}
      key={input.name}
    />
  ));

  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      {showInputs}
      <Button fullWidth className={s.button} htmlType="submit">
        {t("button")}
      </Button>
    </form>
  );
};
