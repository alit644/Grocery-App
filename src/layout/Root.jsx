import { Box } from "@chakra-ui/react";
import Hero from "../components/MainContent/Hero/Hero";
import Categories from "../components/MainContent/categories/Categories";
import ShopBy from "../components/shopBy/shopBy";
import LastProducts from "../components/MainContent/lastProducts/LastProducts";
import Footer from "../components/Footer/Footer";
import { Helmet } from "react-helmet";
import icon from "../assets/logo-ap-02-01.svg";
const Root = () => {
  return (
    <>
      <Helmet>
        <title>Grocery App</title>
        <meta
          name="description"
          content="Welcome to our Grocery! Experience the convenience of having fresh groceries and delicious meals delivered together."
        />
        <meta name="keywords" content="Grocery, Meat, Food" />
        <link rel="icon" href={icon} type="image/x-icon" />
      </Helmet>
      <Box>
        <Box p={3}>
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
      </Box>
    </>
  );
};

export default Root;
