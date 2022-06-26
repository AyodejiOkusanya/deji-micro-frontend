import { useState } from "react";
import {
  Button,
  Container,
  ListItem,
  List,
  Checkbox,
  Input,
} from "@chakra-ui/react";

type Todo = {
  text: string;
  done: boolean;
};

const style = {
  todoList__item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
    if (values?.addItem) {
      setList((list) => [...list, { text: values?.addItem, done: false }]);
    }
    console.log(event.target);
  };

  const handleInputChange = (index: number) => {
    console.log("here");
    setList((prevList) =>
      prevList.map((item, i) => {
        if (i === index) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };

  const inputIsInvalid = !values?.addItem;

  return (
    <Container className="todoList">
      <div className="todoList__inputSection" aria-labelledby="todoList__title">
        <h1 id="todoList__title">Todo List</h1>
        <form onSubmit={handleSubmit}>
          <Input
            id="todoList__inputField"
            aria-label="Add Item"
            type="text"
            name="addItem"
            value={values ? values.addItem : ""}
            onInput={hanldeInputChange}
            aria-invalid={inputIsInvalid}
          />
          <Button
            type="submit"
            aria-disabled={inputIsInvalid}
            disabled={inputIsInvalid}
          >
            Add Todo
          </Button>
        </form>
      </div>
      <div className="todoList__listSection">
        <List className="todoList_items">
          {list.map(({ text, done }, index) => (
            <ListItem
              className="todoList__item"
              style={style.todoList__item}
              key={`${text} - ${index}`}
            >
              <label htmlFor={`${text} - ${index}`}>{text}</label>
              <Checkbox
                id={`${text} - ${index}`}
                onInput={() => handleInputChange(index)}
                checked={done}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
};
