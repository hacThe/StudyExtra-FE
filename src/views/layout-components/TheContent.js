import React from "react";
import { Outlet } from "react-router-dom";

import TheHeader from "./TheHeader";
import TheFooter from "./TheFooter";
import TheNavigation from "./TheNavigation";
import "./TheContent.scss";
import { Box } from "@mui/material";
import ConfirmActionModal from "./ConfirmActionModal";


const TheBody = () => {
  return (
    <>
      <div className='app-body'>
        <Box className='navigation' sx={{ display: { xs: 'none', md: 'flex' }}}>
          <TheNavigation></TheNavigation>
        </Box>
        <div className='app-content'>
          <Outlet></Outlet>
        </div>
      </div> 
    </>
  );
};

const TheContent = () => {
  return (
    <>
      <ConfirmActionModal/>
      <TheHeader></TheHeader>
      <TheBody></TheBody>
      <TheFooter></TheFooter>
    </>
  );
};

export default React.memo(TheContent);
