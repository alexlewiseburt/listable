import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ViewListPage = () => {
  const router = useRouter();
  const id = router.query.id;
  return <Text>View List Page - ID: {id}</Text>;
};

export default ViewListPage;
