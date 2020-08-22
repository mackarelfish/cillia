import { useState, forwardRef, ForwardRefRenderFunction } from "react";
import { Flex, IconButton, Collapse, Text, Box } from "@chakra-ui/core";

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

  const handleCollapse = () => {
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
      <Flex
        my={4}
        w="100%"
        flexDir="row"
        justify="space-between"
        alignItems="center"
        flexWrap={{ xs: "wrap", md: "nowrap" }}
      >
        <Text as="h1">Hello</Text>

        <IconButton
          onClick={handleCollapse}
          display={{ md: "none" }}
          aria-label=""
          icon="arrow-up-down"
        >
          Change
        </IconButton>

        <Box as="nav" flexBasis={{ xs: "100%", md: "auto" }}>
          <Collapse isOpen={showCollapse} duration={400} animateOpacity={true}>
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
        </Box>
      </Flex>
    </Flex>
  );
};

export default forwardRef(Header);
