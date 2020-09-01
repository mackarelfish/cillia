import { Box, Flex, Grid } from "@chakra-ui/core";

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
              flexGrow={1}
              paddingTop={`${navHeight}px`}
              minH="100vh"
            >
              <Wrapper flexGrow={1}>
                <Grid
                  gridTemplateRows="minmax(400px, 1.5fr) 1fr"
                  h="100%"
                  minH="700px"
                  maxH="850px"
                  gridGap="20px"
                >
                  <Flex backgroundColor="green.100">
                    <h1>Hello</h1>
                  </Flex>
                  <Grid
                    gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gridGap="20px"
                  >
                    <Flex backgroundColor="red.100">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi eveniet temporibus quam consequuntur. In quisquam
                      repellendus iste fugit odio nam.
                    </Flex>
                    <Flex backgroundColor="red.100">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi eveniet temporibus quam consequuntur. In quisquam
                      repellendus iste fugit odio nam.
                    </Flex>
                    <Flex backgroundColor="red.100">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Modi eveniet temporibus quam consequuntur. In quisquam
                      repellendus iste fugit odio nam.
                    </Flex>
                  </Grid>
                </Grid>
              </Wrapper>
            </Flex>

            <Flex>
              <Wrapper>
                <Box h="100vh">Hello</Box>
              </Wrapper>
            </Flex>
          </>
        )}
      </LayoutContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
