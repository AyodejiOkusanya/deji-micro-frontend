import { Box } from "@chakra-ui/react";
import React from "react";
import { Kanban } from "./components/Kanban";
import TabsComponent from "./components/Tabs";

const App = () => (
  <Box margin="1.2rem">
    <Box>APP-1</Box>
    <Box>
      <TabsComponent />
      <Kanban />
    </Box>
  </Box>
);

export default App;
