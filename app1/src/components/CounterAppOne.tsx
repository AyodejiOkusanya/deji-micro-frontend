// import { Text, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Box } from "@chakra-ui/react";

type Tabs = {
  title: string;
  content: string;
  active: boolean;
};

// type TabsProps = {
//   tabs: Tabs[];
// };

const tabs: Tabs[] = [
  {
    title: "Shanghai",
    content:
      "From the futuristic skyline of Lujiazui to the 268-mph Maglev train that travels 18.5 miles in 8 minutes, there is no shortage of innovation in China’s most modern city. Enjoy the wonders of this blend of East & West in this dynamic city!",
    active: true,
  },
  { title: "London", content: "Decent", active: false },
  { title: "New York", content: "Busy", active: false },
];

const Tabs = (): any => {
  return (
    <Box className="tabs">
      {tabs.map(({ title }) => (
        <div className="tabs__title" key={title}>
          {title}
        </div>
      ))}
    </Box>
  );
};

export default Tabs;
