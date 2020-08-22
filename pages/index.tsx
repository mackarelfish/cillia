import { useState } from "react";
import { Box, Button } from "@chakra-ui/core";

import Layout, { LayoutContext } from "../components/Layout";

const IndexPage = () => {
  const [layout, setLayout] = useState<"fixed" | "absolute">("fixed");

  return (
    <Layout title="Home | Next.js + TypeScript Example" navPosition={layout}>
      <LayoutContext.Consumer>
        {({ navHeight }) => (
          <>
            <Box
              as="section"
              height="100vh"
              maxH={{ xs: "812px", md: "1000px" }}
              paddingTop={layout === "absolute" ? `${navHeight}px` : 0}
              transition="padding ease"
              backgroundImage="url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80)"
              backgroundSize="cover"
              backgroundPosition="center"
            >
              <Box backgroundColor="green.500">This is a box</Box>
              <h1>Hello</h1>
              <Button
                onClick={() =>
                  setLayout((p) => (p === "fixed" ? "absolute" : "fixed"))
                }
              >
                Change layout
              </Button>
            </Box>
            <Box as="section" minH="100vh">
              <Box backgroundColor="green.500">This is a box</Box>
              <h1>Hello</h1>
            </Box>
          </>
        )}
      </LayoutContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
