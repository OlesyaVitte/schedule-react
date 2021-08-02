import { FC } from "react";
import { useTranslation } from "next-i18next";
import { useFormik } from "formik";
import * as Yup from "yup";

import s from "styles/pages/auth.module.sass";
import { Button } from "components";
import { Input } from "components/common/Forms/Input/Input";

const validationSchema = Yup.object().shape({
  name: Yup.string().max(255).required(),
  surname: Yup.string().max(255).required(),
  email: Yup.string().email().max(255).required(),
  password: Yup.string().min(8).max(255).required(),
});

type Props = {
  handleSubmit: (data: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => void;
};
export const RegisterForm: FC<Props> = ({ handleSubmit }) => {
  const { t } = useTranslation("auth");
  const initialValues = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const inputs = [
    { name: "name", value: formik.values.name, placeholder: t("name") },
    {
      name: "surname",
      value: formik.values.surname,
      placeholder: t("surname"),
    },
    {
      name: "email",
      value: formik.values.email,
      placeholder: t("email"),
    },
    {
      type: "password" as "password" | "text",
      name: "password",
      value: formik.values.password,
      placeholder: t("password"),
    },
  ];
  const showInputs = inputs.map((input) => (
    <Input
      onChange={formik.handleChange}
      {...input}
      key={input.name}
      className={s.input}
      fullWidth
    />
  ));

  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      {showInputs}
      <Button type="submit" className={s.button} fullWidth>
        {t("button")}
      </Button>
    </form>
  );
};
