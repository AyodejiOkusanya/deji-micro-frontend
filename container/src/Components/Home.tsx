import React from "react";
import { Link as ReactLink } from "react-router-dom";
import {
  Heading,
  Link,
  ListItem,
  UnorderedList,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      direction="column"
      minWidth="full"
      justifyContent="center"
      alignItems="center"
      gap="2"
    >
      <Box p="2">
        <Heading size="md">Home</Heading>
      </Box>
      <nav>
        <UnorderedList spacing={3}>
          <ListItem>
            <Link as={ReactLink} to="/tabs">
              Tabs Component
            </Link>
          </ListItem>
          <ListItem>
            <Link as={ReactLink} to="/users">
              Users
            </Link>
          </ListItem>
        </UnorderedList>
      </nav>
    </Flex>
  );
};

export default Home;
