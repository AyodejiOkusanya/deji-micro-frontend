import { Box } from "@chakra-ui/react";
import React from "react";
import ImageGallery from "./components/ImageGallery";

const App = () => (
  <Box margin="1.2rem">
    <Box>Gallery App</Box>
    <Box>
      <ImageGallery />
    </Box>
  </Box>
);

export default App;
