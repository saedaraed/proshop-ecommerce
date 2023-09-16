import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function FeatureCategory(category) {
  console.log("helllo", category);
  const swiperStyles = {
    width: "100%",
    height: "100%",
  };
  const swiperSlideStyles = {
    textAlign: "center",
    fontSize: "18px",
    background: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Featured Categories
      </Typography>
      <hr />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        sx={swiperStyles}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
      >
        {category.category.map((cat) => (
          <SwiperSlide style={swiperSlideStyles}>
            {" "}
            <Card
              sx={{ width: "100%", padding: "20px", background: "#F7F8FC" }}
            >
              <CardMedia
                sx={{ height: 170, width: "100%", objectFit: "cover" }}
                image={cat?.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {cat?.name}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
