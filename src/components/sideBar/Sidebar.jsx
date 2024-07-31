import { Box, Icon, Image, Stack } from "@chakra-ui/react";
import logo from "../../assets/logo-ap-02-01.svg";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineCategory } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { NavLink } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { handelLogout } from "../../utils/LogoutFun";
const Sidebar = () => {
  // nav items
  const navItems = [
    {
      name: "Home",
      icon: GoHome,
      path: "/",
    },
    {
      name: "Cart",
      icon: LuShoppingCart,
      path: "/cart",
    },
    {
      name: "Categories",
      icon: MdOutlineCategory,
      path: "/categories",
    },
  ];



  // show items list
  const navItem = navItems.map((item) => {
    return (
      <NavLink to={item.path} key={item.name}>
        <Stack
          mb={6}
          w={"40px"}
          h={"40px"}
          cursor={"pointer"}
          rounded={"full"}
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{ bg: "#42B257", color: "white" }}
          transition={"all .2s ease-in-out"}
        >
          <Icon as={item.icon} w={6} h={6} />
        </Stack>
      </NavLink>
    );
  });

  return (
    <Box>
      {/* sideBar desktop */}
      <Box
        position={"fixed"}
        p={3}
        h={"100vh"}
        w={"100px"}
        display={{ base: "none", md: "block" }}
        bg={"#F5F6FA"}
      >
        <Stack h={"100%"} direction={"column"} alignItems={"center"}>
          {/* logo */}
          <Box mt={1}>
            <Image w={"40px"} src={logo} />
          </Box>
          {/* nav items */}
          <Stack alignItems={"center"} justifyContent={"center"} flex={1}>
            {navItem}
          </Stack>
          {/* logout */}
          <Stack
            w={"40px"}
            h={"40px"}
            cursor={"pointer"}
            rounded={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            _hover={{ bg: "#C53330", color: "white" }}
            transition={"all .2s ease-in-out"}
            onClick={handelLogout}
          >

            <RiLogoutCircleRLine size={24} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Sidebar;
