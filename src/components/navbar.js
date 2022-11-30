import { Box, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import colors from "../colors";

const Navbar = () => {
  return (
    <VStack h="100px">
      <Box h="8" w="100%" bg={colors.pink} />
      <HStack alignSelf="flex-start" px="5" py="2">
        <Heading fontWeight="normal" mr="3">
          LISTABLE
        </Heading>
        <NextLink href="/" passHref>
          <Link>Home</Link>
        </NextLink>
        <NextLink href="/create" passHref>
          <Link>Create</Link>
        </NextLink>
        <NextLink href="/lists" passHref>
          <Link>Find</Link>
        </NextLink>
      </HStack>
    </VStack>
  );
};

export default Navbar;
