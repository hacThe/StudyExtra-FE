import * as React from "react";
import { NavLink } from "react-router-dom";
import "./TheNavigation.scss";
import { BsBarChartFill, BsQuestionCircleFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { FaLightbulb, FaHeadphones } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

function TheNavigation() {
  const menuList = [
    {
      name: "Home",
      icon: <IoHome />,
      link: "/trang-chu",
    },
    {
      name: "Học",
      icon: <FaLightbulb />,
      link: "/404",
    },
    {
      name: "Hỏi đáp",
      icon: <FaHeadphones />,
      link: "/404",
    },
    {
      name: "Tài liệu",
      icon: <IoIosDocument />,
      link: "/404",
    },
    {
      name: "Xếp hạng",
      icon: <BsBarChartFill />,
      link: "/404",
    },
    {
      name: "Luyện đề",
      icon: <BsQuestionCircleFill />,
      link: "/404",
    },
  ];
  return (
    <>
      <div className="nav-bar-wrapper">
          <div className="mystery-box"></div>
        <List className="navbar">
          {menuList.map((item, index) => (
            <NavLink to={item.link} key={index}>
              <ListItem className="navbar-item">
                <ListItemIcon className="navbar-icon">{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </NavLink>
          ))}
        </List>
      </div>
    </>
  );
}
export default React.memo(TheNavigation);
