import { Box } from "@chakra-ui/core";

import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <section>
      <Box backgroundColor="green.500">This is a box</Box>
      <h1>Hello</h1>
    </section>
  </Layout>
);

export default IndexPage;
