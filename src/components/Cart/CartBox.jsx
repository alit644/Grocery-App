/* eslint-disable react/prop-types */
import {
  Box,
  CloseButton,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { useCart } from "../../Context/CartContext";
import { useAppToast } from "../../Context/ToastContext";
// eslint-disable-next-line react/prop-types
const CartBox = ({
  item: { id, title, image, price, quantity, categoryName },
}) => {


  const toast = useAppToast();

  // remove from cart
  const { dispatch } = useCart();

  const handelRemove = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });

    toast({
      title: "Item removed from cart",
      status: "success",
      duration: 1800,
      isClosable: true,
      position: "bottom-right",
    });
  };

  // increase quantity
  const increaseQuantity = () => {
    dispatch({
      type: "INCREASE",
      payload: { id },
    });
  };

  // decrease quantity
  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE",
      payload: { id },
    });
  };

  return (
    <Box
      position={"relative"}
      p={3}
      mb={2}
      // w={{ base: "100%", md: "600px" }}
      bg={"white"}
      rounded={"lg"}
      boxShadow={"md"}
      id={id}
    >
      <Box>
        <Stack
          direction={{ base: "column", sm: "row" }}
          alignItems={"center"}
          gap={{ base: 2, md: 6 }}
        >
          {/* image */}
          <Box>
            <Image src={image} w={"80px"} h={"100px"} alt="cart image" />
          </Box>
          {/* info */}

          <Stack
            direction={"row"}
            gap={{ base: 0, md: 5 }}
            width={"100%"}
            alignItems={"center"}
            justifyContent={{ base: "space-between", md: "space-around" }}
          >
            <Box>
              <Heading fontWeight={600} size={{ base: "sm", md: "md" }}>
                {categoryName}
              </Heading>
              <Text size={"sm"}>{title}</Text>
            </Box>
            {/* price and DLT */}
            <Stack alignItems={"center"}>
              <Text fontWeight={600} color={"#064B4E"}>
                ${(price * quantity).toFixed(2)}
              </Text>
              <Stack
                border={"1px solid #dcdde4"}
                px={4}
                py={1.5}
                rounded={"full"}
                direction={"row"}
                alignItems={"center"}
                gap={4}
              >
                <Box
                  cursor={"pointer"}
                  as="button"
                  disabled={quantity === 1}
                  onClick={decreaseQuantity}
                >
                  <TiMinus color="#dcdde4" />
                </Box>
                <Flex
                  w={"30px"}
                  h={"30px"}
                  mx={"auto"}
                  bg={"#CAF2CB"}
                  rounded={"full"}
                  direction={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Text>{quantity}</Text>
                </Flex>
                <Box
                  cursor={"pointer"}
                  as="button"
                  disabled={quantity === 20}
                  onClick={increaseQuantity}
                >
                  <FaPlus color="#42B257" />
                </Box>
              </Stack>
            </Stack>
            <Box
              onClick={handelRemove}
              position={"absolute"}
              right={"2"}
              top={"2"}
            >
              <CloseButton bg={"#F5F6FA"} size="sm" />
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default CartBox;
