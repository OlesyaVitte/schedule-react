import React from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/dist/client/router";
import cn from "classnames";

import s from "./Navbar.module.sass";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../flux";
import { logout } from "../../../flux/reducers/auth";
import { Link } from "components/common/Link/Link";

const NavBar = () => {
  const router = useRouter();
  const { t } = useTranslation("navbar");
  // const t = router.locale === "en" ? en : ru;
  console.log("i18n", t("todo"));
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  // const changeLang = (lang: string) => i18n.changeLanguage(lang);

  const onLogout = () => {
    dispatch(logout());
  };
  const onChangeLanguage = (e: any) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  const authContent = () => (
    <>
      <li className={s.item}>
        <Link href="/todos" className={s.link} activeClassName={s.link_active}>
          {t("todo")}
        </Link>
      </li>
      <li className={s.item}>
        <Link
          href="/settings"
          className={s.link}
          activeClassName={s.link_active}
        >
          {t("settings")}
        </Link>
      </li>
    </>
  );

  return (
    <nav className={s.wrapper}>
      <ul className={s.list}>{loggedIn && authContent()}</ul>
      <ul className={s.list}>
        <li className={cn(s.item, s.dropdown)}>
          <div className={s.dropdownButton}>{t("lang")}</div>
          <div className={s.dropdownContent}>
            <Link href={router.asPath} locale="ru" className={s.dropdownItem}>
              ru
            </Link>
            <Link href={router.asPath} locale="en" className={s.dropdownItem}>
              en
            </Link>
          </div>
        </li>
        {loggedIn && <li className={s.item}>{t("logout")}</li>}
      </ul>
    </nav>
  );
};
export default NavBar;
