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
import colors from "../../src/colors";

const CreatePage = () => {
  const options = ["Birthday", "Baby", "Wedding", "Divorce", "School", "Other"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <Box
      minH="calc(100vh - 100px)"
      bgImg="background.jpg"
      bgPosition="center"
      py="10"
    >
      <VStack spacing="14" p="14" bg="whiteAlpha.700" mx="50" rounded="lg">
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          Always give without remembering and always receive without forgetting.
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
        <Input type="date" bg="white" />
        <Heading size="lg" fontWeight="semibold" textAlign="center">
          Where will this exciting thing be happening?
        </Heading>
        <Input type="text" placeholder="City, State" bg="white" />
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
            />
          </InputGroup>
          <Button color="white" bg={colors.pink} alignSelf="flex-end" size="xs">
            Add another item
          </Button>
        </VStack>
        <Button px="10" color="white" bg={colors.pink}>
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
