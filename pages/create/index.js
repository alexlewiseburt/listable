import {
  HStack,
  VStack,
  Heading,
  Box,
  Input,
  Button,
  InputGroup,
  InputLeftAddon,
  useRadioGroup,
  useRadio,
} from "@chakra-ui/react";
import useAxios from "axios-hooks";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import colors from "../../src/colors";

const CreatePage = () => {
  const options = ["Birthday", "Baby", "Wedding", "Divorce", "School", "Other"];
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [items, setItems] = useState([]);

  const [itemName, setItemName] = useState("");
  const [itemLink, setItemLink] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: setType,
  });

  const group = getRootProps();

  const router = useRouter();
  const [{ data: list, loading, error }, postList] = useAxios(
    {
      url: "/api/lists",
      method: "POST",
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    if (list) {
      router.push("/lists");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const onAddItemClick = () => {
    setItems((items) => [
      ...items,
      { name: itemName, link: itemLink, price: itemPrice },
    ]);
    setItemName("");
    setItemLink("");
    setItemPrice("");
  };

  const onSubmitClick = () => {
    let allItems;

    if (itemName && itemLink && itemPrice) {
      allItems = [
        ...items,
        { name: itemName, link: itemLink, price: itemPrice },
      ];
    } else {
      allItems = items;
    }

    const data = {
      name,
      type,
      date: new Date(date).getTime() / 1000,
      location,
      items: allItems.map((item) => ({
        ...item,
        price: Number(item.price),
      })),
    };

    postList({
      data,
    });
  };

  return (
    <Box
      minH="calc(100vh - 100px)"
      bgImg="background.jpg"
      bgPosition="center"
      py="10"
    >
      <VStack spacing="14" p="14" bg="whiteAlpha.700" mx="50" rounded="lg">
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          What is your name?
        </Heading>
        <Input
          type="text"
          bg="white"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          What are you celebrating today?
        </Heading>
        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          Congrats! When is this happening?
        </Heading>
        <Input
          type="date"
          bg="white"
          onChange={(event) => setDate(event.target.value)}
        />
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          Where will this exciting thing be happening?
        </Heading>
        <Input
          type="text"
          placeholder="City, State"
          bg="white"
          onChange={(event) => setLocation(event.target.value)}
        />
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          {"Let's get listing!"}
        </Heading>
        <VStack
          p="14"
          bg="gray.100"
          rounded="lg"
          px="10"
          spacing="4"
          minW="100%"
        >
          <Heading size="sm" fontWeight="bold">
            Item Name
          </Heading>
          <Input
            type="text"
            placeholder="Item Name"
            _placeholder={{ opacity: 0.4 }}
            size="lg"
            bg="white"
            value={itemName}
            onChange={(event) => setItemName(event.target.value)}
          />
          <Heading size="sm" fontWeight="bold">
            Link
          </Heading>
          <Input
            type="url"
            placeholder="Link"
            _placeholder={{ opacity: 0.4 }}
            size="lg"
            bg="white"
            value={itemLink}
            onChange={(event) => setItemLink(event.target.value)}
          />
          <Heading size="sm" fontWeight="bold">
            Price
          </Heading>
          <InputGroup size="lg">
            <InputLeftAddon bg="gray.200">$</InputLeftAddon>
            <Input
              type="number"
              placeholder="Price"
              _placeholder={{ opacity: 0.4 }}
              bg="white"
              value={itemPrice}
              onChange={(event) => setItemPrice(event.target.value)}
            />
          </InputGroup>
          <Button
            color="white"
            bg={colors.pink}
            alignSelf="flex-end"
            size="xs"
            onClick={onAddItemClick}
          >
            Add another item
          </Button>
        </VStack>
        <Button
          px="10"
          color="white"
          bg={colors.pink}
          onClick={onSubmitClick}
          isLoading={loading}
        >
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default CreatePage;

const RadioCard = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        rounded="md"
        boxShadow="md"
        bg="white"
        _checked={{
          bg: colors.pink,
          color: "white",
        }}
        px="5"
        py="3"
      >
        {props.children}
      </Box>
    </Box>
  );
};
