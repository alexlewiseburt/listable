import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Center,
  Spinner,
} from "@chakra-ui/react";
import NextLink from "next/link";
import useAxios from "axios-hooks";
import colors from "../../src/colors";
import { useEffect } from "react";

const ListsPage = () => {
  const [{ data: lists, loading, error }, refetch] = useAxios("/api/lists", {
    manual: true,
    autoCancel: false,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  if ((loading || !lists) && !error) {
    return (
      <Center minH="calc(100vh - 100px)">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center minH="calc(100vh - 100px)">
        <Text>Error loading page - {error}</Text>
      </Center>
    );
  }

  return (
    <Box
      minH="calc(100vh - 100px)"
      bgImg="background.jpg"
      bgPosition="center"
      py="10"
    >
      <VStack spacing="14" p="14" bg="whiteAlpha.700" mx="50" rounded="lg">
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          Find a list
        </Heading>
        <Text size="sm" fontWeight="bold" textAlign="center">
          Select a list from the options below
        </Text>
        <TableContainer w="100%">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th color={colors.pink} fontSize="md">
                  Name
                </Th>
                <Th color={colors.pink} fontSize="md">
                  Type
                </Th>
                <Th color={colors.pink} fontSize="md">
                  Date
                </Th>
                <Th color={colors.pink} fontSize="md">
                  Location
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {lists.map((list) => {
                const date = new Date(0);
                date.setSeconds(list.date);

                return (
                  <Tr key={`list-row-${list.id}`}>
                    <Td>
                      <Link as={NextLink} href={`/lists/${list.id}`}>
                        {list.name}
                      </Link>
                    </Td>
                    <Td>
                      <Link as={NextLink} href={`/lists/${list.id}`}>
                        {list.type}
                      </Link>
                    </Td>
                    <Td>
                      <Link as={NextLink} href={`/lists/${list.id}`}>
                        {date.toLocaleDateString()}
                      </Link>
                    </Td>
                    <Td>
                      <Link as={NextLink} href={`/lists/${list.id}`}>
                        {list.location}
                      </Link>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
    </Box>
  );
};

export default ListsPage;
