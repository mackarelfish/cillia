import { Box, Flex, Text } from "@chakra-ui/core";
import { useRouter } from "next/router";

interface Props {
  img?: string;
  title: string;
  type: string;
  slug: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const ProductCard = ({ img, title, type, slug, ...other }: Props) => {
  const router = useRouter();

  return (
    <Flex
      flexDir="column"
      cursor="pointer"
      onClick={() => router.push(`/product/${slug}`)}
    >
      <Flex flexDir="column">
        <Box
          height="400px"
          background={img ? `url(/images/${img})` : "tomato"}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundPosition="center"
          {...other}
        />
        <Flex flexDir="column" py="1em">
          <Text fontFamily="Cormorant Garamond" fontSize="2xl">
            {title}
          </Text>
          <Text fontSize="sm" fontFamily="Muli">
            {type}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProductCard;
