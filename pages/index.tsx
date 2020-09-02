import { Box, Flex, Grid, Text } from "@chakra-ui/core";

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
              background="url('https://www.toptal.com/designers/subtlepatterns/patterns/so-white.png')"
            >
              <Wrapper flexGrow={1}>
                <Grid
                  gridTemplateRows={{
                    base: "minmax(400px, 500px) auto",
                    md: "minmax(400px, 700px) auto",
                  }}
                  h="100%"
                  maxH={{ md: "900px" }}
                  paddingY="20px"
                  gridGap="20px"
                >
                  <Flex backgroundColor="#cf8273">
                    <h1>Hello</h1>
                  </Flex>
                  <Grid
                    gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gridGap="20px"
                  >
                    <Flex backgroundColor="#385038" minH="300px" color="white">
                      <Flex justifyContent="flex-end" flexDir="column" p="2em">
                        <Text
                          fontFamily="Cormorant Garamond"
                          fontSize={{ base: "30px", sm: "35px", md: "30px" }}
                        >
                          Upper Lashes
                        </Text>
                        <Text
                          fontFamily="Muli"
                          fontSize="14px"
                          textTransform="uppercase"
                        >
                          Shop Now
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex backgroundColor="#573649" minH="300px" color="white">
                      <Flex justifyContent="flex-end" flexDir="column" p="2em">
                        <Text
                          fontFamily="Cormorant Garamond"
                          fontSize={{ base: "30px", sm: "35px", md: "30px" }}
                        >
                          Lower Lashes
                        </Text>
                        <Text
                          fontFamily="Muli"
                          fontSize="14px"
                          textTransform="uppercase"
                        >
                          Shop Now
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex backgroundColor="red.700" minH="300px" color="white">
                      <Flex justifyContent="flex-end" flexDir="column" p="2em">
                        <Text
                          fontFamily="Cormorant Garamond"
                          fontSize={{ base: "30px", sm: "35px", md: "30px" }}
                        >
                          Exclusive Series
                        </Text>
                        <Text
                          fontFamily="Muli"
                          fontSize="14px"
                          textTransform="uppercase"
                        >
                          Shop Now
                        </Text>
                      </Flex>
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
