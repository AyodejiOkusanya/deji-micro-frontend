// import { Text, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

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
  {
    title: "Beijing",
    content:
      "There is always something unique to discover, whether exploring the forgotten corners of the Forbidden Palace or trying the newest bar in Houhai neighbourhood. Wander around in Bejing and enjoy the deep roots of history in this cultural city.",
    active: false,
  },
  {
    title: "Chongqing",
    content:
      "There’s a real sense of “something exciting is happening” throughout the city. It has boomed from being the gateway to Western China to become one of the most important cities in Asia. You'll quickly find that it's exciting to explore Chongqing!",
    active: false,
  },
];

const Tabs = (): any => {
  const [newTabs, setNewTabs] = useState<Tabs[]>(tabs);
  const style = {
    tabs: {
      width: "50%",
      margin: "20% auto",
    },
    tabs__titleBar: {
      display: "inline-flex",
      overflow: "hidden",
    },
    tabs__title: {
      padding: "2px",
      backgroundColor: "lightGrey",
      border: "2px solid #f1f1f1",
      ":hover": {
        color: "#ffffff",
      },
    },
    tabs__content: (active: boolean) => ({
      display: `${active ? "block" : "none"}`,
      animation: "fadeIn 0.4s ease-in",
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
    <Box aria-label="tabs list group" className="tabs" style={style.tabs}>
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }

            to {
              opacity: 1;
            }
          }
        `}
      </style>
      <div
        className="tabs__titleBar"
        style={style.tabs__titleBar}
        role="tablist"
      >
        {newTabs.map(({ title, active }, index) => (
          <Button
            className="tabs__title"
            id={`tabId-${index}`}
            aria-controls={`tab-${index}`}
            aria-selected={active}
            role="tab"
            style={style.tabs__title}
            key={title}
            onClick={() => handleTitleClick(title)}
          >
            {title}
          </Button>
        ))}
      </div>
      <div className="tabs__contentBox">
        {newTabs.map(({ content, active }, index) => (
          <div
            className="tabs__content"
            role="tabpanel"
            aria-labelledby={`tabId-${index}`}
            aria-hidden={!active}
            id={`tab-${index}`}
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
