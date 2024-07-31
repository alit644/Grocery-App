import { Badge, Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Circle from "./CircleHero";
import heroImg from "../../../assets/hero.svg";
const Hero = () => {
  return (
    <Box
      position={"relative"}
      bg={"#42B257"}
      overflow={"hidden"}
      p={3}
      rounded={"2xl"}
      maxW={'100%'}
      height={{ base: "180px", md: "280px" }}
    >
      {/* content */}

      <Stack zIndex={55} direction={"row"} alignItems={"center"} justifyContent={'space-between'}>
        <Stack
          
          p={{ base: 3, md: 6 }}
          w={{ base: "100%", md: "60%" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          direction={"column"}
        >
          <Badge
            w={"fit-content"}
            zIndex={44}
            size={{ base: "md", md: "md" }}
            colorScheme="red"
          >
            Offer Time
          </Badge>
          <Heading
            zIndex={44}
            size={{ base: "sm", md: "lg" }}
            color={"gray.200"}
            fontWeight={"600"}
          >
            Get Special Discount
          </Heading>

          <Heading
            size={{ base: "lg", md: "2xl" }}
            color={"white"}
            fontWeight={"600"}
            zIndex={44}
          >
            40%
          </Heading>
          <Text display={{ base: "none", md: "flex" }} zIndex={43} color={"gray.200"}>
            Experience the convenience of having fresh groceries and <br />{" "}
            delicious meals delivered together.
          </Text>
        </Stack>
        <Box zIndex={55}>
          <Image  width={{ base: "180px", md: "280px" }} height={{ base: "180px", md: "280px" }} alt="hero image" src={heroImg} />
        </Box>
      </Stack>

      {/* CIRCLE */}
      <Box zIndex={3}>
        <Circle bottom={"-10"} left={"-10"} />
        <Circle bottom={"-10"} right={"-10"} />
        <Circle top={"-20"} right={"100px"} />
      </Box>
    </Box>
  );
};

export default Hero;
