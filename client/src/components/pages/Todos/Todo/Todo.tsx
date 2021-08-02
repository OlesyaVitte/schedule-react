import React, { useEffect, useState } from "react";

import s from "./Todo.module.sass";
import x from "assets/images/icons/x.svg";
import check2 from "assets/images/icons/check2.svg";
import TodoUpdateForm from "../TodoUpdateForm";
import { TodoType } from "../../../../types";
import { Button, Card, Preloader } from "../../..";

type Props = {
  itemsIsLoading: Array<string>;
  deleteTodo: (_id: string) => void;
  updateTodoText: (_id: string, text: string) => void;
  item: TodoType;
};
const Todo: React.FC<Props> = ({
  itemsIsLoading,
  deleteTodo,
  updateTodoText,
  item,
}) => {
  // useEffect(() => {
  //   socket.on("update_todo_text", (data: TodoType) => {
  //     updateTodoText(data._id, data.text);

  //     return () => socket.off("update_todo_text");
  //   });
  // }, [item.text]);

  let [textEdit, textSetEdit] = useState(false);

  const onTextSubmit = (todo: { _id: string; text: string }) => {
    textSetEdit(false);
    updateTodoText(todo._id, todo.text);
  };

  const textActivateEdit = () => textSetEdit(true);

  return (
    (itemsIsLoading.some((_id) => _id === item._id) && <Preloader />) || (
      <Card className={s.card}>
        <div className="card-header d-flex justify-content-end">
          <Button
            onClick={() => deleteTodo(item._id)}
            className="btn-danger btn-sm"
          >
            <img src={x} />
          </Button>
        </div>
        <div className="card-body">
          {!textEdit ? (
            <div className="d-flex justify-content-between">
              <p onDoubleClick={textActivateEdit} className="todo_text">
                {item.text}
              </p>
              {item.isCompleted ? (
                <button className="btn btn-sm btn-light">
                  <img src={check2} />
                </button>
              ) : (
                <div>
                  <input type="checkbox" className="form-check-input" />
                </div>
              )}
            </div>
          ) : (
            <TodoUpdateForm initialValues={item} handleSubmit={onTextSubmit} />
          )}
        </div>
      </Card>
    )
  );
};
export default Todo;
