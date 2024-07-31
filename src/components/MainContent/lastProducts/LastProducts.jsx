import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import ProdcutBox from "../../ProductBox/ProdcutBox";
import { useFetch } from "../../../Hooks/useFetch";
import MySkeleton from "../../shared/skeleton/MySkeleton";
import { Link } from "react-router-dom";

const LastProducts = () => {
  //get last products
  const { data, isLoading } = useFetch({
    queryKey: "products",
    URL: "products?_page=1&_limit=5",
  });

  if (isLoading)
    return <MySkeleton h={"254px"} w={{ base: "180px", md: "220px" }} />;
  if (data === undefined || data === null)
    return <MySkeleton h={"254px"} w={{ base: "180px", md: "220px" }} />;

  const showProducts = data?.data?.map((item) => (
    <ProdcutBox key={item.id} item={item} />
  ));

  return (
    <Box p={3} mb={4} bg={"#F8FEFB"}>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={7}
        position={"relative"}
      >
        <Heading fontWeight={600} size={{ base: "md", md: "lg" }} mb={5}>
          Farm fresh products
        </Heading>
        <Button as={Link} to="/products" variant={"outline"} colorScheme="green">
          See All
        </Button>
      </Flex>
      <Stack
        direction={"row"}
        justifyContent={{ base: "center", md: "flex-start" }}
        flexWrap={" wrap"}
      >
        {showProducts}
      </Stack>
    </Box>
  );
};

export default LastProducts;
