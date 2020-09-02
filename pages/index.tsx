import { Box, Flex, Grid, Text, SimpleGrid } from "@chakra-ui/core";

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
              height={{ md: "100vh" }}
              maxH={{ md: "950px" }}
              flexGrow={1}
              paddingTop={`${navHeight}px`}
              background="url('https://www.toptal.com/designers/subtlepatterns/patterns/so-white.png')"
            >
              <Wrapper flexGrow={1}>
                <Grid
                  gridTemplateRows={{
                    base: "minmax(400px, 500px) auto",
                    md: "minmax(400px, 600px) auto",
                  }}
                  h="100%"
                  maxH={{ md: "900px" }}
                  gridGap="20px"
                >
                  <Flex backgroundColor="#cf8273">
                    <h1>Hello</h1>
                  </Flex>
                  <Grid
                    gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gridGap="20px"
                  >
                    <Flex backgroundColor="#385038" color="white">
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
                    <Flex backgroundColor="#573649" color="white">
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
                    <Flex backgroundColor="red.700" color="white">
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

            <Flex as="section">
              <Wrapper>
                <Flex flexDir="column" pt="110px">
                  <Text
                    fontFamily="Cormorant Garamond"
                    fontSize={{ base: "3xl", md: "5xl" }}
                    pb="1em"
                    textAlign="center"
                  >
                    Popular Products
                  </Text>

                  <Grid
                    gridTemplateColumns={{
                      base: "1fr",
                      md: "repeat(2, 1fr)",
                      xl: "repeat(4, 1fr)",
                    }}
                    gridGap="20px"
                    justifyContent="space-between"
                  >
                    <Flex flexDir="column">
                      <Flex flexDir="column">
                        <Box height="400px" backgroundColor="tomato"></Box>
                        <Flex flexDir="column" py="1em">
                          <Text fontFamily="Cormorant Garamond" fontSize="2xl">
                            Leather Jacket
                          </Text>
                          <Text fontSize="sm" fontFamily="Muli">
                            Upper Lashes
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex flexDir="column">
                      <Flex flexDir="column">
                        <Box height="400px" backgroundColor="tomato"></Box>
                        <Flex flexDir="column" py="1em">
                          <Text fontFamily="Cormorant Garamond" fontSize="2xl">
                            Leather Jacket
                          </Text>
                          <Text fontSize="sm" fontFamily="Muli">
                            Upper Lashes
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex flexDir="column">
                      <Flex flexDir="column">
                        <Box height="400px" backgroundColor="tomato"></Box>
                        <Flex flexDir="column" py="1em">
                          <Text fontFamily="Cormorant Garamond" fontSize="2xl">
                            Leather Jacket
                          </Text>
                          <Text fontSize="sm" fontFamily="Muli">
                            Upper Lashes
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex flexDir="column">
                      <Flex flexDir="column">
                        <Box height="400px" backgroundColor="tomato"></Box>
                        <Flex flexDir="column" py="1em">
                          <Text fontFamily="Cormorant Garamond" fontSize="2xl">
                            Leather Jacket
                          </Text>
                          <Text fontSize="sm" fontFamily="Muli">
                            Upper Lashes
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>

                    <Flex flexDir="column">
                      <Flex flexDir="column">
                        <Box height="400px" backgroundColor="tomato"></Box>
                        <Flex flexDir="column" py="1em">
                          <Text fontFamily="Cormorant Garamond" fontSize="2xl">
                            Leather Jacket
                          </Text>
                          <Text fontSize="sm" fontFamily="Muli">
                            Upper Lashes
                          </Text>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Grid>
                </Flex>
              </Wrapper>
            </Flex>
          </>
        )}
      </LayoutContext.Consumer>
    </Layout>
  );
};

export default IndexPage;
