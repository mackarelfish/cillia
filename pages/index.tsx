import { Box } from "@chakra-ui/core";

import Layout, { LayoutContext } from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example" navPosition="absolute">
      <LayoutContext.Consumer>
        {({ navHeight }) => (
          <>
            <Box
              as="section"
              minH="100vh"
              paddingTop={`${navHeight}px`}
              transition="padding 0.2s ease"
              backgroundColor="red.500"
            >
              <Box backgroundColor="green.500">This is a box</Box>
              <h1>Hello</h1>
            </Box>
            <section>
              <Box backgroundColor="green.500">This is a box</Box>
              <h1>Hello</h1>
            </section>
          </>
        )}
      </LayoutContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
