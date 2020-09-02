import { Flex } from "@chakra-ui/core";

type Props = {
  children: React.ReactNode;
  [props: string]: any;
};

// eslint-disable-next-line react/prop-types
const Wrapper: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Flex
      flexDir="column"
      m="0 auto"
      px="1.5em"
      width="100%"
      maxW={["auto", "640px", "768px", "1024px", "1280px"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default Wrapper;
