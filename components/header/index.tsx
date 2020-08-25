import { useState, forwardRef, ForwardRefRenderFunction } from "react";
import { Flex, IconButton, Collapse, Text, Box } from "@chakra-ui/core";
import Link from "next/link";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

type Props = {
  position?: "initial" | "absolute" | "fixed";
  hidden?: boolean;
};

const Header: ForwardRefRenderFunction<HTMLElement, Props> = (
  { position = "initial", hidden = false }: Props,
  ref
) => {
  const [showCollapse, setShowCollapse] = useState(false);
  const handleCollapse = () => {
    setShowCollapse((prev) => !prev);
  };

  return (
    <Flex
      as="header"
      zIndex={999}
      pos={position}
      transform={`translateY(${hidden ? "-100%" : "0"})`}
      transition="all 0.3s ease"
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
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/users">
                  <a>Users</a>
                </Link>
              </li>
            </Flex>
          </Collapse>
        </Box>
      </Flex>
    </Flex>
  );
};

export default forwardRef(Header);
