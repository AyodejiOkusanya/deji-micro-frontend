import { useState } from "react";
import { Button, Container, Input } from "@chakra-ui/react";

type Todo = {
  text: string;
  done: boolean;
};

export const TodoList = () => {
  const [values, setValues] = useState<{ [key: string]: string } | null>(null);
  const [list, setList] = useState<Todo[]>([]);
  const hanldeInputChange = (event: any) => {
    setValues((prevVal) => ({
      ...prevVal,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <Container className="todoList">
      <div className="todoList__inputSection">
        <form onSubmit={handleSubmit}>
          <Input
            id="todoList__inputField"
            aria-label="Add Item"
            type="text"
            name="addItem"
            value={values ? values.addItem : ""}
            onInput={hanldeInputChange}
          />
          <Button type="submit">Add Item</Button>
        </form>
      </div>
      <div className="todoList__listSection">
        <ul className="todoList_items">
          {list.map(({ text, done }) => (
            <li className="todoList__item">{text}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
