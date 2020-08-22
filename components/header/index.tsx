import { useState, forwardRef, ForwardRefRenderFunction } from "react";
import { Flex, IconButton, Collapse, Text } from "@chakra-ui/core";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type Props = {
  position?: "initial" | "absolute" | "fixed";
};

const Header: ForwardRefRenderFunction<HTMLElement, Props> = (
  { position = "initial" }: Props,
  ref
) => {
  const [showCollapse, setShowCollapse] = useState(true);

  const changeHeight = () => {
    setShowCollapse((prev) => !prev);
  };

  return (
    <Flex
      as="header"
      zIndex={999}
      pos={position}
      width="100%"
      ref={ref}
      backgroundColor="green.300"
    >
      <Flex my={4} w="100%" flexDir={{ xs: "column", md: "row" }}>
        <Flex flexGrow={1} justify="space-between" align="center">
          <Text as="h1">Hello</Text>

          <IconButton
            onClick={changeHeight}
            display={{ md: "none" }}
            aria-label="toggle navigation collapse"
            icon="arrow-up-down"
          >
            Change
          </IconButton>
        </Flex>

        <Collapse isOpen={showCollapse} duration={300} animateOpacity={true}>
          <Flex
            as="ul"
            flexDir={{ xs: "column", md: "row" }}
            listStyleType="none"
            css={css`
              @media screen and (min-width: 48em) {
                li:not(:last-child) {
                  margin-right: 0.5rem;
                }
              }
            `}
          >
            <li>Hello</li>
            <li>Saya</li>
            <li>Zaky</li>
          </Flex>
        </Collapse>
      </Flex>
    </Flex>
  );
};

export default forwardRef(Header);
