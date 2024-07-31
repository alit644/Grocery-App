import { Box } from "@chakra-ui/react";
import Hero from "../components/MainContent/Hero/Hero";
import Categories from "../components/MainContent/categories/Categories";
import ShopBy from "../components/shopBy/shopBy";
import LastProducts from "../components/MainContent/lastProducts/LastProducts";
import Footer from "../components/Footer/Footer";
const Root = () => {
  return (
    <Box >
      <Box  p={3}>
        <Hero />
        <Categories />
        {/* Two Box */}
        <ShopBy />
        <LastProducts />
      </Box>

      {/* Footer */}
      <Box p={0}>
        <Footer />
      </Box>
      {/* <Box>ROOT PAGE</Box> */}
    </Box>
  );
};

export default Root;
