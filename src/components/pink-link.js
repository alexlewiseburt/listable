import { chakra, Link } from "@chakra-ui/react";
import colors from "../colors";

const PinkLink = chakra(Link, {
  baseStyle: {
    bg: colors.pink,
    color: "white",
    rounded: "lg",
    px: "3",
    py: "2",
  },
});

export default PinkLink;
