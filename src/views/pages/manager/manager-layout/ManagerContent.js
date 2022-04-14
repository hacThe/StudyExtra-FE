import React from "react";
import { Outlet } from "react-router-dom";
import ManagerHeader from "./ManagerHeader";
import ManagerSideBar from "./ManagerSideBar";
import "./Manager.scss";
import { Container } from "@mui/material";

function ManagerContent(props) {
  return (
    <div className="manager-wrapper">
      <ManagerSideBar />
      <div className="manager-content-wrapper">
        <ManagerHeader />
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </div>
    </div>
  );
}

export default ManagerContent;
