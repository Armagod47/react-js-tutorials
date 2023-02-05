import React from "react";
import {
  ImageList,
  Stack,
  ImageListItem,
  Box,
  ImageListItemBar,
} from "@mui/material";
const MuiImageList = () => {
  return (
    <Stack spacing={4}>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {/* <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}/> */}
            <img src={item.img} alt="images" loading="lazy" />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      <ImageList
        variant="woven"
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {/* <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}/> */}
            <img src={item.img} alt="images" loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
      <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              {/* <img src={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2`}/> */}
              <img src={item.img} alt="images" loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Stack>
  );
};

const itemData = [
  {
    img: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Breakfast",
  },
  {
    img: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Pastry",
  },
  {
    img: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "PanCake",
  },
  {
    img: "https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Fish",
  },
  {
    img: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Burgers & Fries",
  },
  {
    img: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Steak",
  },
  {
    img: "https://images.pexels.com/photos/9609848/pexels-photo-9609848.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Biryani",
  },
  {
    img: "https://images.pexels.com/photos/8346891/pexels-photo-8346891.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Paratha",
  },
  {
    img: "https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Wine",
  },
  {
    img: "https://images.pexels.com/photos/39351/purple-grapes-vineyard-napa-valley-napa-vineyard-39351.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Grapes",
  },
  {
    img: "https://images.pexels.com/photos/2087748/pexels-photo-2087748.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Taco",
  },
  {
    img: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Pasta",
  },
];

export default MuiImageList;
