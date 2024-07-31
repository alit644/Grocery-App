import { Alert, AlertIcon, Box, Button, Heading, Text } from "@chakra-ui/react";
import Inputt from "../Form/Inputt";
import { useForm } from "react-hook-form";
import { useUser } from "../../Context/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderScheme } from "./orderScheme";
import Cookies from "universal-cookie";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../Api";
import { useMutation } from "@tanstack/react-query";
import { useCart } from "../../Context/CartContext";
import { useAppToast } from "../../Context/ToastContext";

// eslint-disable-next-line react/prop-types
const CompeteOrder = ({ setIsCheckout }) => {
  const nav = useNavigate();
  const  toast  = useAppToast();

  const cookies = new Cookies();
  const token = cookies.get("token");
  const { cart, dispatch } = useCart();
  // handel Inputs value React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(orderScheme),
  });

  // handel back
  const handelBack = () => {
    setIsCheckout(false);
  };

  // user Info
  const { user } = useUser();
  const userID = user?.id;
  const { email, firstName, lastName, phoneNumber } = user !== null && user;

  // complete order func
  const completeOrder = async () => {
    const orderData = {
      userID,
      cart,
      orderTime: new Date().toISOString(),
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await axios.post(`${baseURL}/orders`, orderData, config);
    return res.data;
  };

  // Clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // query mutation

  const { mutate, isPending } = useMutation({
    mutationFn: completeOrder,
    onSuccess: () => {
      clearCart();
      toast({
        title: "Order Completed",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "bottom-right",
      });
      nav("/");
    },
    onError: (error) => {
      console.log(error.response.data);
      toast({
        title: error.response.data,
        status: "error",
        duration: 1800,
        isClosable: true,
        position: "bottom-right",
      });
    },
  });

  // on submit
  const onSubmit = () => {
    mutate();
  };

  if (!token)
    return (
      <Box>
        <Alert status="info">
          <AlertIcon />
          <Text>
            To complete the purchase process,{" "}
            <Link to="/login" className="link-login">
              please login
            </Link>
          </Text>
        </Alert>
      </Box>
    );
  return (
    <>
      <Box>
        <Button
          size={"sm"}
          onClick={handelBack}
          variant={"outline"}
          colorScheme="green"
        >
          Go Back
        </Button>
        <Box mt={4}>
          <Heading mb={2} size={"md"} fontWeight={"600"}>
            Complete Delivery Details
          </Heading>
          <Box>
            <Inputt
              label={"Full Name"}
              name={"name"}
              type="text"
              register={register}
              errors={errors.name?.message}
              value={`${firstName} ${lastName}`}
            />
            <Inputt
              label={"Email Address"}
              name={"email"}
              type="email"
              register={register}
              errors={errors.email?.message}
              value={email}
            />
            <Inputt
              label={"Phone Number"}
              name={"number"}
              type="number"
              register={register}
              errors={errors.number?.message}
              value={phoneNumber}
            />
            <Inputt
              label={"Address"}
              name={"address"}
              type="text"
              register={register}
              errors={errors.address?.message}
            />
          </Box>
          <Button
            onClick={handleSubmit(onSubmit)}
            isLoading={isPending}
            loadingText="Placing Order..."
            w={"100%"}
            mt={4}
            colorScheme="green"
          >
            Place Order
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CompeteOrder;
