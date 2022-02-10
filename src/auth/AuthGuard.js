import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import {cookiesUtil} from "../utilities";

export const useAuth = () => {
  const accToken = cookiesUtil.getAccessToken();
  // This is hard code for testing - ahihi
  accToken = "Hihi this is fake acctoken ~~";
  return accToken;
}
