import { useRef, ReactNode, createContext, useState } from "react";
import { Flex } from "@chakra-ui/core";
import Head from "next/head";

import useObserveElement from "../hooks/useObserveElement";
import Header from "../components/header/index";

type Props = {
  children?: ReactNode;
  title?: string;
  navPosition?: "initial" | "absolute" | "fixed";
};

type DefaultLayoutContextProps = {
  navHeight: number;
  handleHideNav?: () => void;
};

export const LayoutContext = createContext<DefaultLayoutContextProps>({
  navHeight: 0,
  handleHideNav: undefined,
});

const Layout = ({
  children,
  title = "This is the default title",
  navPosition = "initial",
}: Props) => {
  const headerRef = useRef<HTMLElement>(null);
  const navHeight = useObserveElement(headerRef, ["height"]);

  const [hideNav, setHideNav] = useState(false);
  const handleHideNav = () => {
    setHideNav((prev) => !prev);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header ref={headerRef} position={navPosition} hidden={hideNav} />

      <Flex as="main" flexGrow={1} direction="column">
        <LayoutContext.Provider value={{ navHeight, handleHideNav }}>
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
