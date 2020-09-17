import { Flex, Box, Text, Button } from "@chakra-ui/core";

import Layout, { LayoutContext } from "../../components/Layout";
import Wrapper from "../../components/Wrapper";

import UpperLashes from "../../public/data/upper_lashes.json";
import LowerLashes from "../../public/data/lower_lashes.json";
import ExcluesiveSeries from "../../public/data/exclusive_series.json";

const Product = ({ product }) => {
  return (
    <Layout>
      <LayoutContext.Consumer>
        {({ navHeight }) => (
          <Wrapper paddingTop={`${navHeight}px`}>
            <Flex flexDir={{ base: "column", md: "row" }} paddingTop="4em">
              <Box
                background={`url(/images/${product.img})`}
                backgroundRepeat="no-repeat"
                backgroundSize="contain"
                backgroundPosition="center"
                height={{ base: 400, md: 800 }}
                flexBasis={{ md: "55%" }}
              />
              <Flex
                flexGrow={1}
                flexBasis={{ md: "65%" }}
                paddingTop={{ base: "4em", md: "0" }}
              >
                <Box paddingLeft={{ md: "4em" }}>
                  <Text as="p" fontSize="18px">
                    {product.type}
                  </Text>
                  <Text as="h1" fontFamily="Cormorant Garamond" fontSize="50px">
                    {product.title}
                  </Text>
                  <Text as="p" fontSize="25px">
                    {product.price}Rp / set
                  </Text>
                  <Box marginTop="2em">
                    <p>Note: Pembelian dapat di mix sampai dengan 4 tipe.</p>
                    <Button marginTop="2em">Checkout di Shopee</Button>
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </Wrapper>
        )}
      </LayoutContext.Consumer>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const allItems = [
    ...UpperLashes.items,
    ...LowerLashes.items,
    ...ExcluesiveSeries.items,
  ];
  return {
    props: {
      product: allItems.filter((d) =>
        d.img.endsWith(".png")
          ? d.img.replace(".png", "") === params.slug
          : d.img.replace(".jpg", "") === params.slug
      )[0],
    },
  };
}

export async function getStaticPaths() {
  const allItems = [
    ...UpperLashes.items,
    ...LowerLashes.items,
    ...ExcluesiveSeries.items,
  ];
  const paths = allItems.map((i) => ({
    params: {
      slug: i.img.endsWith(".png")
        ? i.img.replace(".png", "")
        : i.img.replace(".jpg", ""),
    },
  }));

  return { paths, fallback: false };
}

export default Product;
