import { Image, Stack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const CategoryBox = ({item : {image, title , id}}) => {
  return (
    
    <Stack
      cursor={"pointer"}
      direction={"column"}
      alignItems={"center"}
      bg={"#F5F6FA"}
      w={"140px"}
      h={"180px"}
      rounded={"lg"}
      p={2}
      _hover={{ bg: "#7ec58b57" }}
      transition={"all 0.3s ease"}
      color={"#064B4E"}
      as={NavLink}
      to={`/prdoucts/${id}`} 
      id={id}
      
    >
      <Text textAlign={"center"} fontWeight={"600"}>
      {title}
      </Text>
      <Image w={"100px"} h={"100px"} src={image} alt="category image"/>
    </Stack>
  );
};

export default CategoryBox;
