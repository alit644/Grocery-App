import { Box, Icon, Stack } from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineCategory } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { handelLogout } from "../../utils/LogoutFun";
import Cookies from "universal-cookie";

const MobilNav = () => {
  const cookie = new Cookies();
  const token = cookie.get("token");
  // nav items
  const navItems = [
    {
      name: "Home",
      icon: GoHome,
      path: "/",
    },
    {
      name: "Categories",
      icon: MdOutlineCategory,
      path: "/categories",
    },
    {
      name: "Cart",
      icon: LuShoppingCart,
      path: "/cart",
    },
  ];

  // show items list
  const navItem = navItems.map((item) => {
    return (
      <NavLink to={item.path} key={item.name}>
        <Stack
          w={"40px"}
          h={"40px"}
          cursor={"pointer"}
          alignItems={"center"}
          rounded={"full"}
          color={"white"}
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
    <Box
      position={"fixed"}
      bottom="16px" // تعديل المسافة من الأسفل
      left="16px"  // تعديل المسافة من اليسار
      right="16px" // تعديل المسافة من اليمين
      mx="auto"
      w="calc(100% - 32px)" // 
      h={"60px"}
      zIndex={10}
      bg={"#1e2123"}
      p={2}
      rounded={"20px"}
      display={{ base: "block", md: "none" }}
    >
      <Stack direction={"row"} gap={4} justifyContent={"center"}>
        {navItem}
        {token && (
          <Stack
            w={"40px"}
            h={"40px"}
            cursor={"pointer"}
            rounded={"full"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"#C53330"}
            _hover={{ bg: "#C53330", color: "white" }}
            transition={"all .2s ease-in-out"}
            onClick={handelLogout}
          >
            <RiLogoutCircleRLine size={24} />
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default MobilNav;
