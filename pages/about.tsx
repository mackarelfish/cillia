import Link from "next/link";
import { Flex, Box } from "@chakra-ui/core";

import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout>
    <Flex direction="column" flexGrow={1}>
      <Flex flexGrow={1} direction="column">
        <Box minH="100vh">
          <h1>Hello</h1>
        </Box>
        <Box minH="100vh">
          <h1>Hi</h1>
        </Box>
      </Flex>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </Flex>
  </Layout>
);

export default AboutPage;
