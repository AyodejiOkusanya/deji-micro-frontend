import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Accordian from "./components/Accordian";
import { Table } from "./components/Table";
import { TodoList } from "./components/TodoList";

const App = () => (
  <Box margin="1.2rem">
    <Box>APP-2</Box>
    <Flex alignItems={"center"}>
      <Accordian />
      <Table />
      <TodoList />
    </Flex>
  </Box>
);

export default App;
