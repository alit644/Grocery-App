import { NavLink } from "react-router-dom";
import HeadBar from "../../components/headBar/HeadBar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Inputt from "../../components/Form/Inputt";
import { sigUpScheme } from "../../utils/sigUpScheme";
import axios from "axios";
import { baseURL } from "../../Api";
import Cookies from "universal-cookie";
import { useUser } from "../../Context/UserContext";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Image,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import loginImg from "../../assets/loginImg-01.svg";
import { usePost } from "./usePost";

export default function SignupPage() {
  // cookies
  const cookies = new Cookies();

  // user info
  const { updateUser } = useUser();

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(sigUpScheme),
  });

  // handel data 
  const addUser = async (data) => {
    const res = await axios.post(`${baseURL}/register`, data);
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
      <HeadBar />
      <Box h={"100vh"} bg={"#F1EFED"} p={5}>
        <Stack
          h={"100%"}
          direction={{ base: "column", md: "row" }}
          bg={"white"}
          rounded={"2xl"}
        >
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"2xl"}>Create New Account</Heading>

              <HStack>
                <Box>
                  <Inputt
                    label={"First Name"}
                    name={"firstName"}
                    register={register}
                    errors={errors.firstName?.message}
                  />
                </Box>
                <Box>
                  <Inputt
                    label={"Last Name"}
                    name={"lastName"}
                    register={register}
                    errors={errors.lastName?.message}
                  />
                </Box>
              </HStack>

              <Inputt
                label={"Email email"}
                name={"email"}
                register={register}
                type="email"
                errors={errors.email?.message}
              />
              <Inputt
                label={"Phone Number"}
                name={"phoneNumber"}
                type="number"
                register={register}
                errors={errors.phoneNumber?.message}
              />

              <Inputt
                label={"Password"}
                name={"password"}
                register={register}
                type="password"
                errors={errors.password?.message}
              />

              <Stack spacing={6}>
                <Button
                  onClick={handleSubmit(onSubmit)}
                  bg={"#CAF2CB"}
                  variant={"solid"}
                  isLoading={isPending}
                  loadingText="sending..."
                >
                  Sign up
                </Button>
              </Stack>
              {/* dont have an account */}
              <Box>
                <Text>
                  You already have an account?
                  <Button
                    variant={"link"}
                    as={NavLink}
                    to={"/login"}
                    colorScheme="blue"
                  >
                    Sign in
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
