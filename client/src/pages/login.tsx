import { useTranslation } from "next-i18next";
import DocumentTitle from "react-document-title";
import { useDispatch, useSelector } from "react-redux";

import { login } from "flux/reducers/auth";

import s from "styles/pages/login.module.sass";

import { AuthLayout } from "layouts/AuthLayout/AuthLayout";
import { LoginForm } from "components/pages/Login/LoginForm";
import { CardTitle } from "components/common/Card/CardTitle";
import { Link } from "components/common/Link/Link";
import { RootState } from "flux";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { withAuthRedirect } from "hoc/authRedirect";

const Login = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("auth");

  const handleSubmit = (data: { email: string; password: string }) => {
    dispatch(login(data.email, data.password));
  };

  return (
    <AuthLayout>
      <CardTitle text={t("login")} />
      <LoginForm handleSubmit={handleSubmit} />

      <Link href="/register" className={s.link}>
        {t("register")}
      </Link>
    </AuthLayout>
  );
};
export default withAuthRedirect(Login);
