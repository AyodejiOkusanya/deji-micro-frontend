import { Box } from "@chakra-ui/react";
import React from "react";
import Accordian from "./components/Accordian";
import { Table } from "./components/Table";

const App = () => (
  <Box margin="1.2rem">
    <Box>APP-2</Box>
    <Box>
      <Accordian />
      <Table />
    </Box>
  </Box>
);

export default App;
