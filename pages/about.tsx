import Link from "next/link";
import { Flex } from "@chakra-ui/core";

import Layout from "../components/Layout";

const AboutPage = () => (
  <Layout>
    <Flex direction="column" flexGrow={1}>
      <Flex flexGrow={1} direction="column">
        <h1>About</h1>
        <p>This is the about page</p>
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
