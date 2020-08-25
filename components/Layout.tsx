import { useRef, ReactNode, createContext, useState } from "react";
import { Flex } from "@chakra-ui/core";
import Head from "next/head";

import useObserveElement from "../hooks/useObserveElement";
import Header from "../components/header/index";
import { useScrollPosition } from "../hooks/useScrollPosition";

type DefaultLayoutContextProps = {
  navHeight: number;
  handleHideNav?: () => void;
};

export const LayoutContext = createContext<DefaultLayoutContextProps>({
  navHeight: 0,
  handleHideNav: undefined,
});

type Props = {
  children?: ReactNode;
  title?: string;
  navPosition?: "initial" | "absolute" | "fixed";
};

const Layout = ({
  children,
  title = "This is the default title",
  navPosition = "initial",
}: Props) => {
  const [navPos, setNavPos] = useState(navPosition);

  const headerRef = useRef<HTMLElement>(null);
  const navHeight = useObserveElement(headerRef, ["height"]);
  const [hideNav, setHideNav] = useState(false);
  const handleHideNav = () => {
    setHideNav((prev) => !prev);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;

      // if (currPos.y <= -150) {
      //   if (isShow !== hideNav) setHideNav(isShow);
      // } else {
      //   if (currPos.y === 0) setHideNav(false);
      // }

      if (currPos.y >= -300) {
        if (currPos.y === 0) setHideNav(false);
        if (navPos === "fixed") {
          setHideNav(true);
          setTimeout(() => {
            setNavPos("absolute");
            setHideNav(false);
          }, 200);
        }
      } else {
        if (isShow !== hideNav) {
          setHideNav(true);
          setTimeout(() => setNavPos("fixed"), 300);
          setHideNav(isShow);
        }
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header ref={headerRef} position={navPos} hidden={hideNav} />

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
