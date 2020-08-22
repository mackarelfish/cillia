import { useRef, ReactNode, useState, createContext } from "react";
import { Flex, Button, Collapse, Text } from "@chakra-ui/core";
import Head from "next/head";

import useObserveElement from "../hooks/useObserveElement";
import Header from "../components/header/index";

type Props = {
  children?: ReactNode;
  title?: string;
  navPosition?: "initial" | "absolute" | "fixed";
};

export const LayoutContext = createContext({ navHeight: 0 });

const Layout = ({
  children,
  title = "This is the default title",
  navPosition = "initial",
}: Props) => {
  const headerRef = useRef<HTMLElement>(null);
  const navHeight = useObserveElement(headerRef, "clientHeight");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header ref={headerRef} position={navPosition} />

      <Flex as="main" flexGrow={1} direction="column">
        <LayoutContext.Provider value={{ navHeight }}>
          {children}
        </LayoutContext.Provider>
      </Flex>

      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
