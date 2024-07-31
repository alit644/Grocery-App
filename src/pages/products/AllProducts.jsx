import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { useFetch } from "../../Hooks/useFetch";
import MySkeleton from "../../components/shared/skeleton/MySkeleton";
import ProdcutBox from "../../components/ProductBox/ProdcutBox";

const AllProducts = () => {
  //get last products
  const { data, isLoading } = useFetch({
    queryKey: "products",
    URL: "products",
  });

  if (isLoading)
    return <MySkeleton h={"254px"} w={{ base: "180px", md: "220px" }} />;
  if (data === undefined || data === null)
    return <MySkeleton h={"254px"} w={{ base: "180px", md: "220px" }} />;

  const showProducts = data?.data?.map((item) => (
    <ProdcutBox key={item.id} item={item} />
  ));

  return (
    <Box p={3}>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={7}
        position={"relative"}
      >
        <Heading fontWeight={600} size={{ base: "md", md: "lg" }} mb={5}>
          All Products
        </Heading>
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

export default AllProducts;
