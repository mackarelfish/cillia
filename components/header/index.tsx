import {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
} from "react";
import { Flex, Collapse, Text, Box } from "@chakra-ui/core";
import styled from "@emotion/styled";

import useGetWindowWidth from "../../hooks/useGetWindowWidth";
import Wrapper from "../Wrapper";
import ActiveLink from "../ActiveLink";

const CilliaHeader = styled(Flex)`
  position: ${(props) => props.position};
  font-family: "Muli";

  &.scroll {
    transform: translateY(-100%);
    padding: 0;
    position: fixed;

    &.show {
      transform: translateY(0);
    }
  }

  &.trans {
    transition: transform 0.3s ease;
  }

  .cillia__nav > {
    &li a.cillia__navitem {
      transition: border 0.2s ease;
      font-size: 14px;
      text-transform: uppercase;
    }

    &li a:hover,
    &li a.cillia__navitem.selected {
      border-bottom: 1px solid black;
    }
  }

  .cillia__logo {
    width: 45px;
  }

  .cillia__logotext {
    font-family: "Cormorant Garamond";
  }

  @media screen and (min-width: 48em) {
    .cillia__nav > li:not(:last-child) {
      margin-right: 1rem;
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
    if (windowWidth >= 768) setShowCollapse(true);
    else setShowCollapse(false);
  }, [windowWidth]);

  return (
    <CilliaHeader
      as="header"
      position={position}
      zIndex={999}
      width="100%"
      ref={ref}
      backgroundColor="white"
      borderBottom="1px solid #E2E8F0"
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
          <Flex alignItems="center">
            <img
              src="/images/cillia_logo_only.png"
              alt="logo"
              className="cillia__logo"
            />
            <Text className="cillia__logotext" fontSize="22px" ml="8px">
              Cillia Lashes
            </Text>
          </Flex>

          <Flex
            as="a"
            onClick={handleCollapse}
            cursor="pointer"
            display={{ md: "none" }}
          >
            <Box
              as="span"
              display="block"
              className="lnr lnr-menu"
              style={{ fontSize: "24px" }}
            ></Box>
          </Flex>

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
                  <ActiveLink href="/">
                    <a className="cillia__navitem">Home</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/about">
                    <a className="cillia__navitem">About</a>
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/users">
                    <a className="cillia__navitem">Catalogue</a>
                  </ActiveLink>
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
