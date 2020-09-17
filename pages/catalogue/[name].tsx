import { Box, Grid, Text } from "@chakra-ui/core";
import { useRouter } from "next/router";
import Layout, { LayoutContext } from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import Wrapper from "../../components/Wrapper";
import SectionData from "../../public/data/section.json";

const Catalogue = () => {
  const router = useRouter();
  const { name } = router.query;

  let data;
  if (name === "lower_lashes")
    data = require("../../public/data/lower_lashes.json");
  else if (name === "upper_lashes")
    data = require("../../public/data/upper_lashes.json");
  else if (name === "exclusive_series")
    data = require("../../public/data/exclusive_series.json");

  let section;
  if (typeof name === "string") section = SectionData[name];

  return (
    <Layout>
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

export default Catalogue;
