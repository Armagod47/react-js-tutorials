import React, { useState, useEffect } from "react";
import { Skeleton, Stack, Box, Avatar, Typography } from "@mui/material";
// To preview as placeholder before ethe actual datas get loaded and rendered to page
const MuiSkeleton = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    // <Stack spacing={2} width="250px" animation="wave">
    //   <Skeleton variant="text"></Skeleton>
    //   <Skeleton
    //     variant="circular"
    //     width="40px"
    //     height="40px"
    //     animation="wave"
    //   ></Skeleton>
    //   <Skeleton
    //     variant="rectangular"
    //     width="250px"
    //     height="125px"
    //     animation="wave"
    //   ></Skeleton>
    // </Stack>
    <Box sx={{ width: "250px" }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="250px"
          height="125px"
          animation="wave"
        />
      ) : (
        <img
          src="https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="skeleton"
          width="250px"
          height="125px"
        />
      )}
      <Stack
        direction="row"
        spacing={1}
        sx={{ width: "100%", marginTop: "12px" }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            animation="wave"
            width="50px"
            height="50px"
          ></Skeleton>
        ) : (
          <Avatar>V</Avatar>
        )}
        <Stack sx={{ width: "80%" }}>
          {loading ? (
            <>
              <Typography variant="body1">
                <Skeleton
                  variant="text"
                  animation="wave"
                  width="100px"
                ></Skeleton>
              </Typography>
              <Typography variant="body2">
                <Skeleton
                  variant="text"
                  animation="wave"
                  width="100px"
                ></Skeleton>
              </Typography>
            </>
          ) : (
            <Typography variant="body1">React Mui Tutorial</Typography>
          )}
        </Stack>
      </Stack>
    </Box>
  );
};

export default MuiSkeleton;
