import {
  Box,
  Center,
  Heading,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import useAxios from "axios-hooks";
import { useRouter } from "next/router";
import { useEffect } from "react";
import colors from "../../src/colors";
import PinkLink from "../../src/components/pink-link";

const ViewListPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const [{ data: list, loading, error }, refetch] = useAxios(
    `/api/lists/${id}`,
    {
      manual: true,
      autoCancel: false,
    }
  );

  useEffect(() => {
    if (id) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if ((loading || !list) && !error) {
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
        <Heading size="lg" fontWeight="semibold">
          {list.name}
        </Heading>
        <TableContainer w="100%">
          <Table variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th color={colors.pink} fontSize="md">
                  Name
                </Th>
                <Th color={colors.pink} fontSize="md">
                  Price
                </Th>
                <Th />
              </Tr>
            </Thead>
            <Tbody>
              {list.items.map((item) => {
                return (
                  <Tr key={`item-row-${item.id}`}>
                    <Td>{item.name}</Td>
                    <Td>${item.price}</Td>
                    <Td isNumeric>
                      <PinkLink href={item.link} isExternal>
                        Buy
                      </PinkLink>
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

export default ViewListPage;
