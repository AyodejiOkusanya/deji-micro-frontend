import { Button, Box, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

const accordians = [
  { title: "Section 1", content: "Here is some useful content", active: false },
  {
    title: "Section 2",
    content: "Hey, look, I made you some content",
    active: false,
  },
  {
    title: "Section 3",
    content: "Me again, I've made your favourite, more content!",
    active: false,
  },
];

const style = {
  accordian: {
    margin: "2rem auto",
  },
  accordian__section: {
    margin: "2rem auto",
  },
  accordian__content: {
    maxHeight: 0,
    overflow: "hidden",
    transition: "max-height 0.5s",
  },
  accordian__title: {
    cursor: "pointer",
  },
  accordian__listGroup: {
    listStyle: "none",
  },
};

const Accordian = () => {
  const [accordianList, setAccordianList] = useState(accordians);

  const handleClick = (title: string, contentRef: any) => {
    setAccordianList((prevList) =>
      prevList.map((item) => {
        if (item.title === title) {
          if (contentRef.current.style.maxHeight !== "0px") {
            contentRef.current.style.maxHeight = 0;
          } else {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
          }

          return { ...item, active: !item.active };
        }
        return { ...item, active: false };
      })
    );
  };
  return (
    <Box className="accordian" style={style.accordian}>
      <ul
        aria-label="accordian list group"
        className="accordian__listGroup"
        style={style.accordian__listGroup}
      >
        {accordianList.map(({ title, content, active }, index) => {
          const contentRef = useRef(null);
          return (
            <li
              className="accordian__section"
              style={style.accordian__section}
              key={title}
            >
              <Button
                className="accordian__title"
                id={`contentId-${index}`}
                aria-controls={`content-${index}`}
                aria-expanded={active}
                style={style.accordian__title}
                onClick={() => handleClick(title, contentRef)}
              >
                {title}
              </Button>
              <div
                className="accordian__content"
                aria-labelledby={`contentId-${index}`}
                id={`content-${index}`}
                aria-hidden={!active}
                ref={contentRef}
                style={style.accordian__content}
              >
                {content}
              </div>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Accordian;
