import {
  Avatar,
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/logo-ap-02-01.svg";
import { SlHandbag } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import { useUser } from "../../Context/UserContext";
const HeadBar = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  // user info
  const { user } = useUser();
  const fullName = user?.firstName + " " + user?.lastName;

  return (
    <Box as="header" p={3} bg={"white"} mb={4} position={"sticky"} top={0} zIndex={99}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {/* logo */}
        <Stack as={Link} to={"/"}  direction={"row"} alignItems={"center"}>
          <Image  w={"45px"} h={"45px"} src={logo} />
          <Text fontWeight={"600"}>Grocery</Text>
        </Stack>
        {/* search */}
        <Box display={{ base: "none", md: "block" }} w={"50%"}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <CiSearch color="gray.300" />
            </InputLeftElement>
            <Input
              border={"none"}
              bg={"#F5F6FA"}
              rounded={"full"}
              type="tel"
              placeholder="What do you want to eat today"
            />
          </InputGroup>
        </Box>
        <Flex direction={"row"} gap={4} alignItems={"center"}>
          <Stack
            cursor={"pointer"}
            _hover={{ bg: "#7ec58b57" }}
            alignItems={"center"}
            justifyContent={"center"}
            bg="#CAF2CB"
            w={"36px"}
            h={"36px"}
            rounded={"full"}
            transition={"all 0.3s ease"}
            as={Link}
            to="/cart"
          >
            <SlHandbag />
          </Stack>
          {token !== undefined ? (
            <Stack as={Link} to={"/profile"} cursor={"pointer"} direction={"row"} alignItems={"center"}>
              <Avatar size="sm" name={fullName} bg="#C53330" color={'white'}/>
              <Text display={{ base: "none", md: "block" }}>{fullName}</Text>
            </Stack>
          ) : (
            <Button as={NavLink} to="/login" colorScheme="green">
              Login
            </Button>
          )}
        </Flex>
      </Stack>
    </Box>
  );
};

export default HeadBar;
