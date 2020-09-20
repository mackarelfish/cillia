import { Flex, Grid, Text, Button } from "@chakra-ui/core";
import Link from "next/link";

import Layout, { LayoutContext } from "../components/Layout";
import Wrapper from "../components/Wrapper";
import ProductCard from "../components/ProductCard";

const IndexPage = () => {
  const navPosition = "absolute";

  return (
    <Layout title="Cillia Lashes | Home" navPosition={navPosition}>
      <LayoutContext.Consumer>
        {({ navHeight }) => (
          <>
            <Flex
              as="section"
              minH={{ md: "800px" }}
              height={{ md: "100vh" }}
              maxH={{ md: "850px", xl: "1000px" }}
              flexGrow={1}
              paddingTop={navPosition === "absolute" ? `${navHeight}px` : ""}
              background="url('https://www.toptal.com/designers/subtlepatterns/patterns/so-white.png')"
            >
              <Wrapper flexGrow={1}>
                <Grid
                  gridTemplateRows={{
                    base: "minmax(470px, 550px) minmax(240px, auto)",
                    xl: "minmax(350px, 550px) minmax(240px, 300px)",
                  }}
                  h="100%"
                  py="20px"
                  maxH={{ md: "800px", xl: "1000px" }}
                  gridGap="20px"
                >
                  <Flex
                    background="url('/images/cillia_main.png')"
                    flexDir="column"
                    justifyContent="center"
                    alignItems={{ base: "center", md: "flex-start" }}
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundPosition="26% 0"
                  >
                    <Flex
                      paddingLeft={{ md: "4em" }}
                      flexDir="column"
                      alignItems={{ md: "flex-start" }}
                    >
                      <Text
                        fontFamily="Cormorant Garamond"
                        textAlign={{ base: "center", md: "initial" }}
                        fontSize={{ base: "35px", md: 50 }}
                        color="white"
                      >
                        Bulu mata menawan, <br />
                        praktis digunakan.
                      </Text>
                      <Link href="/catalogue">
                        <Button marginTop="20px">Lihat Katalog</Button>
                      </Link>
                    </Flex>
                  </Flex>
                  <Grid
                    gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                    gridGap="20px"
                  >
                    <Flex backgroundColor="#385038" color="white">
                      <Flex justifyContent="flex-end" flexDir="column" p="2em">
                        <Text
                          fontFamily="Cormorant Garamond"
                          fontSize={{
                            base: "30px",
                            sm: "35px",
                            md: "26px",
                            xl: "30px",
                          }}
                        >
                          Upper Lashes
                        </Text>
                        <Link
                          as="/catalogue/upper_lashes"
                          href="/catalogue/[name]"
                        >
                          <Text
                            fontFamily="Muli"
                            fontSize="12px"
                            textTransform="uppercase"
                            cursor="pointer"
                          >
                            See Catalogue
                          </Text>
                        </Link>
                      </Flex>
                    </Flex>
                    <Flex backgroundColor="#573649" color="white">
                      <Flex justifyContent="flex-end" flexDir="column" p="2em">
                        <Text
                          fontFamily="Cormorant Garamond"
                          fontSize={{
                            base: "30px",
                            sm: "35px",
                            md: "26px",
                            xl: "30px",
                          }}
                        >
                          Lower Lashes
                        </Text>
                        <Link
                          as="/catalogue/lower_lashes"
                          href="/catalogue/[name]"
                        >
                          <Text
                            fontFamily="Muli"
                            fontSize="12px"
                            textTransform="uppercase"
                            cursor="pointer"
                          >
                            See Catalogue
                          </Text>
                        </Link>
                      </Flex>
                    </Flex>
                    <Flex backgroundColor="red.700" color="white">
                      <Flex justifyContent="flex-end" flexDir="column" p="2em">
                        <Text
                          fontFamily="Cormorant Garamond"
                          fontSize={{
                            base: "30px",
                            sm: "35px",
                            md: "26px",
                            xl: "30px",
                          }}
                        >
                          Exclusive Series
                        </Text>
                        <Link
                          as="/catalogue/exclusive_series"
                          href="/catalogue/[name]"
                        >
                          <Text
                            fontFamily="Muli"
                            fontSize="12px"
                            textTransform="uppercase"
                            cursor="pointer"
                          >
                            See Catalogue
                          </Text>
                        </Link>
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
                      sm: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                      xl: "repeat(4, 1fr)",
                    }}
                    gridGap="20px"
                    justifyContent="space-between"
                  >
                    <ProductCard
                      type="Adi Rustana"
                      title="Series: Bold"
                      img="adi_rustana_1.jpg"
                      slug="adirustana_series_bold"
                    />
                    <ProductCard
                      type="Yolanda"
                      title="Series: Bold"
                      img="yolanda_bold_front.jpg"
                      slug="yolanda_series_bold"
                    />
                    <ProductCard
                      type="Ari Izam"
                      title="Series: Bold"
                      img="ari_izam_front.jpg"
                      slug="ari_series_bold"
                    />
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
