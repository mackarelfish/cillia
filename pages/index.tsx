import { Box, Flex } from "@chakra-ui/core";
import Link from "next/link";

import Layout, { LayoutContext } from "../components/Layout";
import Wrapper from "../components/Wrapper";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example" navPosition="absolute">
      <LayoutContext.Consumer>
        {({ navHeight }) => (
          <>
            <Flex
              as="section"
              height="100vh"
              maxH={{ xs: "812px", md: "1000px" }}
              flexDir={{ base: "column", md: "row" }}
              paddingTop={`${navHeight}px`}
              backgroundColor="tomato"
              transition="padding ease"
            >
              <Flex
                flexDir="column"
                flexBasis={{ base: "45%", md: "55%" }}
                minH="200px"
              >
                <h1>This is a box</h1>
              </Flex>
              <Flex
                flexGrow={1}
                backgroundImage="url(https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80)"
                backgroundSize="cover"
                backgroundPosition="center"
                overflow="hidden"
              >
                <h1>This is another box</h1>
              </Flex>
            </Flex>
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
