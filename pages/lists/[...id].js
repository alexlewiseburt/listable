import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import colors from "../../src/colors";
import PinkLink from "../../src/components/pink-link";

const ViewListPage = () => {
  const router = useRouter();
  const id = router.query.id;

  const list = {
    id: 1,
    name: "Alex Baby List",
    type: "Baby",
    date: 1669872243,
    location: "Michigan",
    items: [
      {
        id: 1,
        name: "Diapers",
        link: "https://google.com",
        price: 13.99,
      },
      {
        id: 2,
        name: "Bottles",
        link: "https://google.com",
        price: 10.31,
      },
    ],
  };

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
