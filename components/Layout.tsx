import { useRef, ReactNode, useState, createContext } from "react";
import { Flex, Button, Collapse } from "@chakra-ui/core";
import Link from "next/link";
import Head from "next/head";

import useObserveElement from "../hooks/useObserveElement";

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
  const [showText, setShowText] = useState(true);

  const changeHeight = () => {
    setShowText((prev) => !prev);
  };

  const headerRef = useRef<HTMLElement>(null);
  const navHeight = useObserveElement(headerRef, "height");

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header
        style={{
          position: navPosition,
          width: "100%",
        }}
        ref={headerRef}
      >
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{" "}
          |{" "}
          <Link href="/about">
            <a>About</a>
          </Link>{" "}
          |{" "}
          <Link href="/users">
            <a>Users List</a>
          </Link>{" "}
          | <a href="/api/users">Users API</a>
          <Button onClick={changeHeight} display="block">
            Change
          </Button>
        </nav>
        <Collapse isOpen={showText} duration={10} animateOpacity={true}>
          <Flex as="ul" my={2} flexDir="column">
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello2</li>
            <li>Hello3</li>
            <li>HelloKitty</li>
          </Flex>
        </Collapse>
      </header>

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
