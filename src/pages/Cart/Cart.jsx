import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";
import CartBox from "../../components/Cart/CartBox";
import CompeteOrder from "../../components/Cart/CompeteOrder";
import { useState } from "react";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const [isCheckout, setIsCheckout] = useState(false);

    // get token 



  const { cart } = useCart();
  //  show cart items
  const cartItems = cart.map((item) => {
    return <CartBox key={item.id} item={item} />;
  });

  // handel chek out
  const handelCheckout = () => {
    setIsCheckout(true);
  };
  // total price
  const totalPrice = cart.reduce((acc, item) => {
    return (acc + item.price * item.quantity)
  }, 0);
  return (
    <>
      {cart.length == 0 ? (
        <Stack direction={"column"} alignItems={"center"} justifyContent={"center"}>
          <Text color={'#42B257'}  size={'md'} mb={2}>
            There are no items in this cart
          </Text>
          <Button variant={"outline"} colorScheme="green">
            <Link to={"/products"}>Shop Now</Link>
          </Button>
        </Stack>
      ) : (
        //! cart page
        <Box p={3} bg={"#F8FEFB"}>
          <Flex
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            mb={3}
            position={"relative"}
          >
            {!isCheckout && (
              <Heading fontWeight={600} size={{ base: "md", md: "lg" }} mb={5}>
                Selected Items
              </Heading>
            )}
          </Flex>

          <Stack
            direction={{ base: "column", md: "row" }}
            justifyContent={{ base: "center", md: "space-between" }}
          >
            <Box width={{ base: "100%", md: "60%" }}>
              {isCheckout ? (
                <CompeteOrder setIsCheckout={setIsCheckout} />
              ) : (
                <>{cartItems}</>
              )}
            </Box>
            <Box></Box>
            {/* order Summary */}
            <Box
              w={{ base: "100%", md: "380px" }}
              h={"fit-content"}
              bg={"white"}
              boxShadow={"lg"}
              border={"1px solid #E5E5E5"}
              p={3}
              rounded={"lg"}
            >
              <Heading fontWeight={600} size={{ base: "md", md: "lg" }} mb={5}>
                Order Summary
              </Heading>

              <HStack color={"grey"} justifyContent={"space-between"}>
                <Text>Subtotal</Text>
                <Text>$ {(totalPrice).toFixed(2)} USD</Text>
              </HStack>
              <HStack color={"grey"} justifyContent={"space-between"}>
                <Text>Delivery charge</Text>
                <Text>$ 4.90 USD</Text>
              </HStack>
              <HStack mt={2} justifyContent={"space-between"}>
                <Text fontWeight={600}>Total</Text>
                <Text color="green" fontWeight={600}>
                  $ {(totalPrice + 4.90).toFixed(2)} USD
                </Text>
              </HStack>
              {!isCheckout && (
                <Button
                  onClick={handelCheckout}
                  w={"full"}
                  my={5}
                  variant={"solid"}
                  colorScheme={"green"}
                >
                  Proceed To Checkout
                </Button>
              )}
            </Box>
          </Stack>
        </Box>
      )}
    </>
  );
};

export default Cart;
