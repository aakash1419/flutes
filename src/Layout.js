import React from "react";
import { Box, Typography } from "@material-ui/core";
import Header from "./components/Header";

import { Route, Routes } from "react-router-dom";
import Homepage from "./screens/Homepage/Homepage";

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Layout;
