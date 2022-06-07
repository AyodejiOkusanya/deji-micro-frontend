// import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
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
  const [newTabs, setNewTabs] = useState<Tabs[]>(tabs);
  const style = {
    tabs: {
      width: "50%",
      margin: "20% auto",
    },
    tabs__titleBar: {
      display: "flex",
      justifyContent: "space-between",
    },
    tabs__title: {
      backgroundColor: "grey",
      padding: "2px",
    },
    tabs__content: (active: boolean) => ({
      display: `${active ? "block" : "none"}`,
    }),
  };

  const handleTitleClick = (title: string) => {
    setNewTabs((prevTabs) =>
      prevTabs.map((tab) => {
        if (tab.title === title) {
          return { ...tab, active: true };
        }
        return { ...tab, active: false };
      })
    );
  };
  return (
    <Box className="tabs" style={style.tabs}>
      <div className="tabs__titleBar" style={style.tabs__titleBar}>
        {newTabs.map(({ title }) => (
          <div
            className="tabs__title"
            key={title}
            onClick={() => handleTitleClick(title)}
          >
            {title}
          </div>
        ))}
      </div>
      <div className="tabs__contentBox">
        {newTabs.map(({ content, active }, index) => (
          <div
            className="tabs__content"
            key={index}
            style={style.tabs__content(active)}
          >
            {content}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Tabs;
