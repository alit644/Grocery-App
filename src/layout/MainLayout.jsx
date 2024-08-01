import { Outlet } from "react-router-dom";
import Sidebar from "../components/sideBar/Sidebar";
import HeadBar from "../components/headBar/HeadBar";
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react";
import MobilNav from "../components/mobilNav/MobilNav";

const MainLayout = () => {
  return (
    <>
      <Grid
        templateAreas={`"nav header"
          "nav main"
          "nav footer"`}
        h="100vh"
        templateRows=" 1fr auto 1ft"
        templateColumns="100px 100px 100px 1fr"
        // gap={4}
      >
        <GridItem
          w={{ base: "0", md: "100px" }}
          display={{ base: "none", md: "block" }}
          area={"nav"}
          colSpan={1}
        >
          <Sidebar />
        </GridItem>
        <GridItem colSpan={{ base: 4, md: 3 }} rowSpan={3} area={"main"}>
          <HeadBar />
          <Box minH={"calc(100vh - 138px)"}  >
            <Outlet />
          </Box>
          {/* footer */}
          <Box   h={{ base: "120px", md: "auto" }} mt={0} bg={"#181a1b"}>
            <Container
              maxW={"6xl"}
              py={4}
              direction={{ base: "column", md: "row" }}
              spacing={4}
              justify={{ base: "center", md: "space-between" }}
              align={{ base: "center", md: "center" }}
            >
              <Text color={"white"}>
                © 2024 Developed By Ali Talib. All rights reserved
              </Text>
            </Container>
          </Box>
        </GridItem>
      </Grid>
      <MobilNav />

    </>
  );
};

export default MainLayout;
