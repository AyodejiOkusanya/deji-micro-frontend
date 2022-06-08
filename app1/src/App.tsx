import { Box } from "@chakra-ui/react";
import React from "react";
import TabsComponent from "./components/Tabs";

const App = () => (
  <Box margin="1.2rem">
    <Box>APP-1</Box>
    <Box>
      <TabsComponent />
    </Box>
  </Box>
);

export default App;
