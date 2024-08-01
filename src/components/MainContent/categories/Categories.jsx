import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import CategoryBox from "./CategoryBox";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./category.css";

import { Box, Flex, Heading, IconButton, Stack } from "@chakra-ui/react";
import { useRef } from "react";
import MySkeleton from "../../shared/skeleton/MySkeleton";
import { useFetch } from "../../../Hooks/useFetch";
const Categories = () => {
  const swiperRef = useRef(null);

  // Fetch data from API

  const { data, isLoading } = useFetch({
    queryKey: "categories",
    URL: "categories?_page=1&_limit=7",
  });

  if (isLoading) return <MySkeleton h={"180px"} w={"140px"} />;
  if(data === undefined) return <MySkeleton h={"180px"} w={"140px"} />

  // show items list
  const categoriesItem = data?.data?.map((item) => {
    return (
      <SwiperSlide key={item.id}>
        <CategoryBox item={item} />
      </SwiperSlide>
    );
  });

  return (
    <Box p={3}>
      <Flex
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mb={7}
        position={"relative"}
      >
        <Heading fontWeight={600} size={{ base: "md", md: "lg" }} mb={5}>
          Popular Categories
        </Heading>
        <Stack
          className="swiper-buttons"
          direction={"row"}
          alignItems={"center"}
        >
          <Box className="swiper-button-prev" cursor={"pointer"}>
            <IconButton>
              <FaAngleRight color="#42B257" />
            </IconButton>
          </Box>
          <Box className="swiper-button-next" cursor={"pointer"}>
            <IconButton>
              <FaAngleLeft color="#42B257" />
            </IconButton>
          </Box>
        </Stack>
      </Flex>

      {/* swiper */}
      <Box>
        <Swiper
          // install Swiper modules
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
        breakpoints={{
    // شاشات صغيرة جدًا
  
    // شاشات متوسطة
    900: {
      slidesPerView: 6, // عرض ثلاث شرائح
    },
    // شاشات كبيرة
    1200: {
      slidesPerView: 4, // عرض خمس شرائح
    },
  }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // pagination={{ clickable: true }}
        >
          {categoriesItem}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Categories;
