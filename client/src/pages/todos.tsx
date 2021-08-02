import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DocumentTitle from "react-document-title";
import { useDispatch, useSelector } from "react-redux";

import s from "styles/pages/todos.module.sass";

import { RootState } from "../flux";
import { addTodo, deleteTodo, updateTodoText } from "../flux/reducers/todo";
import Paginator from "../components/common/Paginator/Paginator";
import Todo from "../components/pages/Todos/Todo/Todo";
import TodoCreateForm from "../components/pages/Todos/TodoCreateForm/TodoCreateForm";
import { useRouter } from "next/dist/client/router";
import { withAuthRedirect } from "hoc/authRedirect";

const Todos = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  const { t, i18n } = useTranslation("todo");
  console.log("OOO", t("todo"));
  const todos = useSelector((state: RootState) => state.todos.todos);
  const itemsIsLoading = useSelector(
    (state: RootState) => state.loader.itemsIsLoading
  );

  // useEffect(() => {
  //   !loggedIn && router.push("/login");
  // }, []);

  const onSubmit = (text: string) => {
    dispatch(addTodo(text));
  };
  const onDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };
  const onUpdateTodoText = (id: string, text: string) => {
    dispatch(updateTodoText(id, text));
  };
  const onPageChanged = () => {
    dispatch(onPageChanged());
  };

  let showTodos = todos.map((item) => (
    <Todo
      item={item}
      key={item._id}
      itemsIsLoading={itemsIsLoading}
      deleteTodo={onDeleteTodo}
      updateTodoText={onUpdateTodoText}
    />
  ));

  return (
    <DocumentTitle title="Todos">
      <div className={s.todos}>
        <Paginator onPageChanged={onPageChanged} />
        {!todos.length && <h2>{t("no_todos")}</h2>}
        {showTodos}
        <TodoCreateForm handleSubmit={onSubmit} />
      </div>
    </DocumentTitle>
  );
};
export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ["todo"])),
  },
});
export default withAuthRedirect(Todos);
