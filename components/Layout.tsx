import { useRef, ReactNode, createContext, useState } from "react";
import { Flex, Text } from "@chakra-ui/core";
import Head from "next/head";

import useObserveElement from "../hooks/useObserveElement";
import Header from "../components/header/index";
import { useScrollPosition } from "../hooks/useScrollPosition";
import Wrapper from "./Wrapper";

type DefaultLayoutContextProps = {
  navHeight: number;
  handleHideNav?: () => void;
  isTop: boolean;
};

export const LayoutContext = createContext<DefaultLayoutContextProps>({
  navHeight: 0,
  handleHideNav: undefined,
  isTop: true,
});

type Props = {
  children?: ReactNode;
  title?: string;
  navPosition?: "initial" | "absolute" | "fixed";
};

const Layout = ({
  children,
  title = "This is the default title",
  navPosition = "absolute",
}: Props) => {
  const headerRef = useRef<HTMLElement>(null);
  const navHeight = useObserveElement(headerRef, ["height"]);

  const [hideNav, setHideNav] = useState(false);
  const handleHideNav = () => {
    setHideNav((prev) => !prev);
  };

  const [isTop, setIsTop] = useState(true);
  const [scrollUp, setScrollUp] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;
      setScrollUp(!isShow);

      if (currPos.y <= -300) {
        if (isShow !== hideNav) setHideNav(isShow);
      } else if (currPos.y <= -150) {
        setHideNav(true);
        setIsTop(false);
      } else {
        setHideNav(false);
        setIsTop(true);
      }
    },
    [hideNav],
    null,
    false,
    0
  );

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Muli"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Cormorant%20Garamond"
        />
        <link
          rel="stylesheet"
          href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header
        ref={headerRef}
        position={navPosition}
        hidden={hideNav}
        scrollUp={scrollUp}
        isTop={isTop}
      />

      <Flex as="main" flexGrow={1} direction="column">
        <LayoutContext.Provider value={{ navHeight, handleHideNav, isTop }}>
          {children}
        </LayoutContext.Provider>
      </Flex>

      <footer style={{ paddingTop: "110px" }}>
        <hr />
        <Wrapper>
          <Flex height="60px" alignItems="center" justifyContent="flex-end">
            <Text>Cillia Lashes © | 2020</Text>
          </Flex>
        </Wrapper>
      </footer>
    </div>
  );
};

export default Layout;
