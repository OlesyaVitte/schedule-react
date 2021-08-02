import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import { useDispatch, useSelector } from "react-redux";

import { register } from "flux/reducers/auth";

import s from "styles/pages/login.module.sass";

import { AuthLayout } from "layouts/AuthLayout/AuthLayout";
import { CardTitle } from "components/common/Card/CardTitle";
import { Link } from "components/common/Link/Link";
import { RegisterForm } from "components/pages/Register/RegisterForm";
import { RootState } from "flux";
import { withAuthRedirect } from "hoc/authRedirect";

const Register = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("auth");

  const handleSubmit = (data: {
    name: string;
    surname: string;
    email: string;
    password: string;
  }) => {
    dispatch(register(data.name, data.surname, data.email, data.password));
  };

  return (
    <AuthLayout>
      <CardTitle text={t("register")} />
      <RegisterForm handleSubmit={handleSubmit} />

      <Link href="/login" className={s.link}>
        {t("login")}
      </Link>
    </AuthLayout>
  );
};
export default withAuthRedirect(Register);
