import { Box, Button } from "@chakra-ui/core";
import Link from "next/link";

import Layout, { LayoutContext } from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example" navPosition="fixed">
      <LayoutContext.Consumer>
        {({ navHeight, handleHideNav }) => (
          <>
            <Box
              as="section"
              height="100vh"
              maxH={{ xs: "812px", md: "1000px" }}
              paddingTop={`${navHeight}px`}
              transition="padding ease"
              backgroundImage="url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80)"
              backgroundSize="cover"
              backgroundPosition="center"
            >
              <Box backgroundColor="green.500">This is a box</Box>
              <Link href="/about">
                <h1>Hello</h1>
              </Link>
              <Button onClick={handleHideNav}>Change layout</Button>
            </Box>
            <Box as="section" minH="100vh">
              <Box backgroundColor="green.500">
                This is a box skjadkajsdkjaksd
              </Box>
            </Box>
          </>
        )}
      </LayoutContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
