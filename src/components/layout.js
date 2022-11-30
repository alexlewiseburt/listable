import { Box, VStack } from "@chakra-ui/react";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <VStack spacing="0">
      <Box w="100%">
        <Navbar />
      </Box>
      <Box w="100%">{children}</Box>
    </VStack>
  );
};

export default Layout;
