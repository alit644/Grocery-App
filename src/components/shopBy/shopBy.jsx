import { Box, Button, Heading, Image, Stack } from "@chakra-ui/react";
import ImgOne from "../../assets/box-one.png"
import ImgTwo from "../../assets/box-2.png"
const ShopBy = () => {
  const towBox = [
    {
      headingTxt: `Everyday Fresh &
              Clean With our 
                Products`,
      bgColor: "#FED8A1",
      image: ImgOne,
      btnColor: "red",
    },
    {
      headingTxt: `Make Your
              Breakfast Healthy
                and Easy`,
      bgColor: "#CAF2CB",
      image: ImgTwo,
      btnColor: "green",
    },
  ];

  const showBoxes = towBox.map((item, i) => {
    return (
      <Stack
        key={i}
        alignItems={'center'}
        direction={{ base: "column-reverse", md: "row" }}
        w={{ base: "100%", md: "50%" }}
        p={6}
        rounded={"35px"}
        bg={item.bgColor}
      >
        {/* info */}
        <Box>
          <Heading mb={"6"} color={"#064B4E"} size={{ base: "md", md: "lg" }}>
            {item.headingTxt}
          </Heading>
          <Button colorScheme={item.btnColor} color={'white'} >Shop Now</Button>
        </Box>
        <Box>
          <Image w={{ base: "200px", md: "300px" }}  alt={"image"} src={item.image} />
        </Box>
      </Stack>
    );
  });
  return (
    <Stack my={4} width={"100%"} p={3} direction={{ base: "column", md: "row" }}>
      {showBoxes}
    </Stack>
  );
};

export default ShopBy;
