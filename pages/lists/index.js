import { Box, Heading, HStack, Text, VStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const ListsPage = () => {
  const lists = [
    {
      id: 1,
      name: "Alex Baby List",
      type: "Baby",
      date: 1669872243,
      location: "Michigan",
    },
    {
      id: 2,
      name: "Jeffrey Wedding",
      type: "Wedding",
      date: 1669872319,
      location: "Michigan",
    },
    {
      id: 3,
      name: "Axl Birthday",
      type: "Birthday",
      date: 1669872359,
      location: "California",
    },
  ];

  const listRows = lists.map((list) => {
    const date = new Date(0);
    date.setSeconds(list.date);

    return (
      <Box w="100%" key={`list-row-${list.id}`}>
        <NextLink href={`/lists/${list.id}`}>
          <HStack>
            <Text minW="25%">{list.name}</Text>
            <Text minW="25%">{list.type}</Text>
            <Text minW="25%">{date.toLocaleDateString()}</Text>
            <Text minW="25%">{list.location}</Text>
          </HStack>
        </NextLink>
      </Box>
    );
  });

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
        {listRows}
      </VStack>
    </Box>
  );
};

export default ListsPage;
