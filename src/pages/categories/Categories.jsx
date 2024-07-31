import { Box, Flex, Heading } from "@chakra-ui/react";
import CategoryBox from "../../components/MainContent/categories/CategoryBox";
import { useFetch } from "../../Hooks/useFetch";
import MySkeleton from "../../components/shared/skeleton/MySkeleton";

const Categories = () => {
  const { data, isLoading } = useFetch({
    queryKey: "categories",
    URL: "categories",
  });

  if (isLoading) return <MySkeleton h={"180px"} w={"140px"} />;
  if (data === undefined) return <MySkeleton h={"180px"} w={"140px"} />;

  // show items list
  const categoriesItem = data?.data?.map((item) => {
    return <CategoryBox key={item.id} item={item} />;
  });

  return (
    <Box p={3}>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={"relative"}
      >
        <Heading fontWeight={600} size={{ base: "md", md: "lg" }} mb={5}>
          All Categories
        </Heading>
      </Flex>
      <Flex
        my={6}
        direction={"row"}
        justifyContent={{ base: "center", md: "flex-start" }}
        gap={{ base: 4, md: 6 }}
        flexWrap={"wrap"}
      >
        {categoriesItem}
      </Flex>
    </Box>
  );
};

export default Categories;
