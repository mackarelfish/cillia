import { Box, Grid, Text } from "@chakra-ui/core";
import Layout, { LayoutContext } from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import Wrapper from "../../components/Wrapper";
import SectionData from "../../public/data/section.json";

const Catalogue = ({ section, data }) => {
  return (
    <Layout title={"Cillia | " + section}>
      <LayoutContext.Consumer>
        {({ navHeight }) => (
          <>
            <Box paddingTop={`${navHeight}px`}>
              <Wrapper paddingTop="4em">
                <Text
                  fontFamily="Cormorant Garamond"
                  fontSize={{ base: "3xl", md: "5xl" }}
                  pb="1em"
                  textAlign="center"
                >
                  {section}
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
                  {data &&
                    data.items.map((p) => (
                      <ProductCard
                        key={p.img}
                        type={p.type}
                        title={p.title}
                        img={p.img}
                        slug={
                          p.img.endsWith(".png")
                            ? p.img.replace(".png", "")
                            : p.img.replace(".jpg", "")
                        }
                        backgroundSize="contain"
                      />
                    ))}
                </Grid>
              </Wrapper>
            </Box>
          </>
        )}
      </LayoutContext.Consumer>
    </Layout>
  );
};

export function getStaticPaths() {
  const routes = ["lower_lashes", "upper_lashes", "exclusive_series"];
  return {
    paths: routes.map((r) => ({ params: { name: r } })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  let data: unknown;
  if (params.name === "lower_lashes")
    data = require("../../public/data/lower_lashes.json");
  else if (params.name === "upper_lashes")
    data = require("../../public/data/upper_lashes.json");
  else if (params.name === "exclusive_series")
    data = require("../../public/data/exclusive_series.json");

  let section: string;
  if (typeof params.name === "string") section = SectionData[params.name];

  return { props: { data, section } };
}

export default Catalogue;
