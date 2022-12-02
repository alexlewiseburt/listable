import {
  Button,
  Center,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import colors from "../src/colors";
import PinkLink from "../src/components/pink-link";

const HomePage = () => {
  return (
    <Center h="calc(100vh - 100px)" bgImg="background.jpg" bgPosition="center">
      <VStack bg="white" rounded="lg" p="5" spacing="4">
        <Heading color={colors.pink} size="sm">
          Make a list for any stage in life
        </Heading>
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          Online list creator for everyone, including you!
        </Heading>
        <HStack>
          <PinkLink as={NextLink} href="/create">
            Create a list
          </PinkLink>
          <PinkLink as={NextLink} href="/lists">
            Find a list
          </PinkLink>
        </HStack>
      </VStack>
    </Center>
  );
};

export default HomePage;
