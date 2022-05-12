import * as React from "react";
import { NavLink } from "react-router-dom";
import { BsQuestionCircleFill } from "react-icons/bs";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdPlayLesson } from "react-icons/md";
import { IoIosDocument } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa";
import { RiNotification4Fill } from 'react-icons/ri'
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import "./ManagerSideBar.scss";
function TheNavigation() {
  const menuList = [
    {
      name: "Dashboard",
      icon: <AiOutlineDashboard />,
      link: "/quan-ly/dashboard",
    },
    {
      name: "Quản lý khóa học",
      icon: <MdPlayLesson />,
      link: "/quan-ly/khoa-hoc",
    },
    {
      name: "Quản lý người dùng",
      icon: <FaUserGraduate />,
      link: "/quan-ly/nguoi-dung",
    },
    {
      name: "Quản lý tài liệu",
      icon: <IoIosDocument />,
      link: "/quan-ly/tai-lieu",
    },
    {
      name: "Quản lý thi thử",
      icon: <BsQuestionCircleFill />,
      link: "/quan-ly/thi-thu",
    },
    {
      name: 'Quản lý thông báo',
      icon: <RiNotification4Fill/>,
      link: "/quan-ly/thong-bao-chung"
    }
  ];
  return (
    <>
      <div className="manager-side-bar-wrapper">
        <div className="mystery-box"></div>
        <div className="fixed-position-content">
          <div className="branding-heading">
            <h1>Study extra manager</h1>
          </div>
          <List className="manager-side-bar">
            {menuList.map((item, index) => (
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: "#8C79FF" } : undefined
                }
                to={item.link}
                key={index}
              >
                <ListItem className="manager-nav-item" sx={{ gutters: "24px" }}>
                  <ListItemIcon className="manager-nav-leading">
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    className="manager-nav-content"
                    primary={item.name}
                  />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </div>
    </>
  );
}
export default React.memo(TheNavigation);
