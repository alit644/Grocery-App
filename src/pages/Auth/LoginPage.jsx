import {
  Button,
  Flex,
  Heading,
  Stack,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import loginImg from "../../assets/loginImg-01.svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Inputt from "../../components/Form/Inputt";
import { loginScheme } from "../../utils/LoginScheme";
import axios from "axios";
import { baseURL } from "../../Api";
import Cookies from "universal-cookie";
import { useUser } from "../../Context/UserContext";
import { usePost } from "./usePost";

export default function LoginPage() {
  // cookies
  const cookies = new Cookies();
  // user Info
  const { updateUser } = useUser();
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginScheme),
  });

  // Login user func
  const addUser = async (data) => {
    const res = await axios.post(`${baseURL}/login`, data);
    return res.data;
  };

  // quert mutation
  const { mutate, isPending } = usePost({ 
    mutFn: addUser,
    updateUser,
    cookies
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <>
      <Box h={{ base: "auto", md: "100vh" }} bg={"#F1EFED"} p={5}>
        <Stack
          h={"100%"}
          direction={{ base: "column", md: "row" }}
          bg={"white"}
          rounded={"2xl"}
        >
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"2xl"}>Sign in to your account</Heading>

              <Inputt
                name={"email"}
                label={"Email address"}
                type="email"
                register={register}
                errors={errors.email?.message}
              />
              <Inputt
                name={"password"}
                label={"Password"}
                type="password"
                register={register}
                errors={errors.password?.message}
              />

              <Stack spacing={6}>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  bg={"#CAF2CB"}
                  variant={"solid"}
                  isLoading={isPending}
                  loadingText="Loading..."
                >
                  Sign in
                </Button>
              </Stack>
              {/* dont have an account */}
              <Box>
                <Text>
                  Dont have an account?{" "}
                  <Button
                    variant={"link"}
                    as={NavLink}
                    to={"/signup"}
                    colorScheme="blue"
                  >
                    Sign Up
                  </Button>
                </Text>
              </Box>
            </Stack>
          </Flex>
          <Flex bg={"#F1EFED"} m={4} flex={1}>
            <Image w={"100%"} h={"100%"} alt={"Login Image"} src={loginImg} />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
