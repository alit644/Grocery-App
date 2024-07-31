import { Alert, AlertIcon, Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { useFetch } from "../../Hooks/useFetch";
import { useParams } from "react-router-dom";
import MySkeleton from "../../components/shared/skeleton/MySkeleton";
import ProdcutBox from "../../components/ProductBox/ProdcutBox";

const Products = () => {
  const { id } = useParams();
  // get products by category
  const { data, isLoading } = useFetch({
    queryKey: "products",
    URL: `products?categoryId=${id}`,
  });

  if (isLoading)
    return <MySkeleton h={"254px"} w={{ base: "180px", md: "220px" }} />;
  if (data === undefined || data === null)
    return <MySkeleton h={"254px"} w={{ base: "180px", md: "220px" }} />;

  // show prodycts list
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
        {data?.data[0]?.categoryName ? (
          <Heading fontWeight={600} size={{ base: "md", md: "lg" }} mb={5}>
            {data.data[0].categoryName}
          </Heading>
        ) : (
          <Alert status="error" colorScheme="red">
            <AlertIcon />
            No Products Available
          </Alert>
        )}
      </Flex>
      <Stack
        direction={"row"}
        justifyContent={{ base: "center", md: "flex-start" }}
        flexWrap={" wrap"}
        gap={{ base: 2, md: 6 }}
      >
        {showProducts}
      </Stack>
    </Box>
  );
};

export default Products;
