import {
  Button,
  Center,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import colors from "../src/colors";
import PinkLink from "../src/components/pink-link";

const HomePage = () => {
  return (
    <Center h="100vh" bg="gray.200" bgImg="background.jpg" bgPosition="center">
      <VStack bg="white" rounded="lg" p="5" spacing="4">
        <Heading color={colors.pink} size="sm">
          Make a list for any stage in life
        </Heading>
        <Heading size="lg" fontWeight="semibold">
          Online list creator for everyone, including you!
        </Heading>
        <HStack>
          <PinkLink href="/create">Create a list</PinkLink>
          <PinkLink href="/lists">Find a list</PinkLink>
        </HStack>
      </VStack>
    </Center>
  );
};

export default HomePage;
