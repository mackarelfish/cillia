import {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
} from "react";
import { Flex, IconButton, Collapse, Text, Box } from "@chakra-ui/core";
import Link from "next/link";

import useGetWindowWidth from "../../hooks/useGetWindowWidth";
import styled from "@emotion/styled";
import Wrapper from "../Wrapper";

const CilliaHeader = styled(Flex)`
  position: ${(props) => props.position};

  &.scroll {
    transform: translateY(-100%);
    padding: 0;
    position: fixed;
    background-color: white;

    &.show {
      transform: translateY(0);
    }
  }

  &.trans {
    transition: transform 0.3s ease;
  }

  @media screen and (min-width: 48em) {
    .cillia__nav > li:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

type Props = {
  position?: "initial" | "absolute" | "fixed";
  hidden?: boolean;
  isTop?: boolean;
  scrollUp?: boolean;
};

const Header: ForwardRefRenderFunction<HTMLElement, Props> = (
  {
    position = "initial",
    hidden = false,
    isTop = true,
    scrollUp = false,
  }: Props,
  ref
) => {
  const windowWidth = useGetWindowWidth();
  const [showCollapse, setShowCollapse] = useState(false);
  const handleCollapse = () => {
    setShowCollapse((prev) => !prev);
  };

  useEffect(() => {
    if (windowWidth > 768) setShowCollapse(true);
    else setShowCollapse(false);
  }, [windowWidth]);

  return (
    <CilliaHeader
      as="header"
      position={position}
      zIndex={999}
      width="100%"
      ref={ref}
      backgroundColor="tomato"
      className={`${
        !isTop
          ? hidden
            ? "trans scroll"
            : "trans scroll show"
          : hidden
          ? scrollUp
            ? "scroll trans"
            : "scroll"
          : ""
      }`}
    >
      <Wrapper>
        <Flex
          my={4}
          w="100%"
          flexDir="row"
          justify="space-between"
          alignItems="center"
          flexWrap={{ xs: "wrap", md: "nowrap" }}
        >
          <Text as="h1">{scrollUp ? "up" : "down"}</Text>

          <IconButton
            onClick={handleCollapse}
            display={{ md: "none" }}
            aria-label=""
            icon="arrow-up-down"
          >
            Change
          </IconButton>

          <Box as="nav" flexBasis={{ xs: "100%", md: "auto" }}>
            <Collapse
              isOpen={showCollapse}
              duration={400}
              animateOpacity={true}
            >
              <Flex
                as="ul"
                flexDir={{ xs: "column", md: "row" }}
                listStyleType="none"
                className="cillia__nav"
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
      </Wrapper>
    </CilliaHeader>
  );
};

export default forwardRef(Header);
