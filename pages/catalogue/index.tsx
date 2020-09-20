import { Button, Flex, Text } from "@chakra-ui/core";
import Link from "next/link";
import Layout, { LayoutContext } from "../../components/Layout";
import Wrapper from "../../components/Wrapper";

const CatalogueIndex = () => {
  return (
    <Layout title="Cillia | Catalogue">
      <LayoutContext.Consumer>
        {({ navHeight }) => (
          <>
            <Flex
              paddingTop={`${navHeight}px`}
              height="400px"
              background="url('https://www.toptal.com/designers/subtlepatterns/patterns/so-white.png')"
              justifyContent="center"
              alignItems="center"
            >
              <Text as="h1" fontFamily="Cormorant Garamond" fontSize="50px">
                Catalogue
              </Text>
            </Flex>
            <Wrapper>
              <Flex
                justifyContent="space-evenly"
                paddingTop="3em"
                flexDir={{ base: "column", md: "row" }}
              >
                <Flex alignItems="center" flexDir="column">
                  <img
                    src="/images/atas.png"
                    alt="Upper lashes"
                    style={{ height: "250px", maxWidth: "355px" }}
                    draggable={false}
                  />
                  <Link href="/catalogue/[name]" as="/catalogue/upper_lashes">
                    <Button alignSelf="center">Upper Lashes</Button>
                  </Link>
                </Flex>
                <Flex alignItems="center" flexDir="column">
                  <img
                    src="/images/bawah.png"
                    alt="Lower lashes"
                    style={{ height: "250px", maxWidth: "355px" }}
                    draggable={false}
                  />
                  <Link href="/catalogue/[name]" as="/catalogue/lower_lashes">
                    <Button alignSelf="center">Lower Lashes</Button>
                  </Link>
                </Flex>
              </Flex>
            </Wrapper>
          </>
        )}
      </LayoutContext.Consumer>
    </Layout>
  );
};

export default CatalogueIndex;
