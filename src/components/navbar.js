import { Box, Heading, HStack, Link, VStack } from "@chakra-ui/react";
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
        <Link as={NextLink} href="/">
          Home
        </Link>
        <Link as={NextLink} href="/create">
          Create
        </Link>
        <Link as={NextLink} href="/lists">
          Find
        </Link>
      </HStack>
    </VStack>
  );
};

export default Navbar;
