/* eslint-disable react/prop-types */
import {
  Badge,
  Box,
  Card,
  CardBody,
  CardFooter,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { SlHandbag } from "react-icons/sl";
import { useCart } from "../../Context/CartContext";
import { useAppToast } from "../../Context/ToastContext";
const ProdcutBox = ({
  item: { categoryName, price, id, tag, title, image, unit },
}) => {
  // add to cart
  const { dispatch } = useCart();

  // toast
  const toast  = useAppToast();

  // handel add to cart
  const handelAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { categoryName, price, id, tag, title, image, unit },
    });

    toast({
      title: "Item added to cart",
      status: "success",
      duration: 1800,
      isClosable: true,
      position: "bottom-right",
    });
  };

  return (
    <>
      <Card
        mb={2}
        w={{ base: "180px", md: "220px" }}
        bg={"#F7F8F2"}
        rounded={"lg"}
        boxShadow={"none"}
        id={id}
      >
        <CardBody>
          <Box my={4}>
            <Badge
              position={"absolute"}
              left={"2"}
              top={"2"}
              colorScheme="green"
            >
              {tag}
            </Badge>
            <Image src={image} w={"80%"} h={"70px"} alt={title} />
          </Box>

          <Stack gap={0}>
            <Text color={"gray.500"}>{categoryName}</Text>
            <Heading color={"#064B4E"} mb={0} size={"md"}>
              {title}
            </Heading>
            <Text mt={0} color={"#064B4E"}>
              {unit}
            </Text>
          </Stack>
        </CardBody>
        <CardFooter py={{ base: 2, md: 4 }}>
          <HStack width={"100%"} justifyContent={"space-between"}>
            <Heading size={"md"} color="#064B4E" variant="solid">
              ${price}
            </Heading>
            <Stack
              cursor={"pointer"}
              _hover={{ bg: "#7ec58b57" }}
              alignItems={"center"}
              justifyContent={"center"}
              bg="#CAF2CB"
              w={"40px"}
              h={"40px"}
              rounded={"full"}
              transition={"all 0.3s ease"}
              onClick={handelAddToCart}
            >
              <SlHandbag />
            </Stack>
          </HStack>
        </CardFooter>
      </Card>
    </>
  );
};

export default ProdcutBox;
