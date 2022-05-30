import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Badge,
  MenuItem,
  Avatar,
  Menu,
  Grid,
} from "@mui/material";

import { BiSearch } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import "./ManagerHeader.scss";
import { userActions } from "../../../../actions/user.actions";

function ManagerHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNt, setAnchorNt] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isNotificationMenuOpen = Boolean(anchorNt);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const UserInfo = useSelector(
    (state) => state.user.currentUser
  );

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  }
  //----------------
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  //---------------
  const handleNotificationMenuOpen = (event) => {
    setAnchorNt(event.currentTarget);
  };
  const handleNotificationMenuClose = () => {
    setAnchorNt(null);
    handleMobileMenuClose();
  };
  //------------------
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const notifications = useSelector((state) => state.userNotifications.notifications) || [];

  useEffect(async () => {
    dispatch(userActions.getCurrentUser());
      dispatch(userActions.getUserNotifications()); 
  }, []);

  //--------------------------------------------------------------PROFILE-MENU-------------------------------------------------------//
  const profileMenuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className="profile-menu"
    >
      <MenuItem className="profile_group">
        <Grid item xs={4} style={{ paddingRight: "1rem" }}>
          <Avatar
            className="avatar"
            alt="Remy Sharp"
            src={
              typeof UserInfo === "undefined"
                ? "default-avatar.png"
                : UserInfo.avatar
            }
          />
        </Grid>
        <Grid item xs={8}>
          <h6>
            {typeof UserInfo === "undefined" ? "Username" : UserInfo.username}
          </h6>
          <p>{typeof UserInfo === "undefined" ? "0" : UserInfo.gem} GEM</p>
        </Grid>
      </MenuItem>
      <Link to="/thong-tin-tai-khoan">
        <MenuItem onClick={handleMenuClose}>Thông tin tài khoản</MenuItem>
      </Link>
      <Link to="/">
        <MenuItem onClick={handleMenuClose}>Người dùng</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>Đổi mật khẩu</MenuItem>
      <MenuItem onClick={()=>handleLogout()}>Đăng xuất</MenuItem>
    </Menu>
  );
  const notificationMenuId = "primary-search-notification-menu";

  const NotificationContent = (props) => {
    const comment = (
      <p className="notification-content">
        <span style={{ fontWeight: "bold" }}>{props.notification.creator}</span>{" "}
        {props.notification.content}
      </p>
    );
    const systemNotification = (
      <p className="notification-content">{props.notification.content}</p>
    );
    return props.notification.type === "system" ? systemNotification : comment;
  };

  const renderNotificationMenu = (
    <Menu
      anchorEl={anchorNt}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={notificationMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
      className="notification-menu"
    >
     {notifications.map((item, index) => (
        <MenuItem
          key={index}
          onClick={handleNotificationMenuClose}
          className="notification_group"
        >
          <Avatar
            className="avatar"
            alt="Remy Sharp"
            src={item.type === "system" ? "/SE-LOGO.png" : item.creator.avatar}
          />
          <NotificationContent notification={item} />
        </MenuItem>
      ))}
      {
        notifications.length < 1 &&
        <MenuItem 
        onClick={handleNotificationMenuClose}
        className="notification_group"
        style={{fontSize: "1.5rem"}}
        >
          Không có thông báo nào
        </MenuItem>
      }
    </Menu>
  );

  //-----------------------------------------------------------Notification-Avatar_GROUP--------------------------------------------//

  //---------------------------------------------------------------------------------------------------------------------//
  return (
    <div className="manager-header-wrapper">
      <AppBar position="static" className="the-header">
        <Grid container className="tool-bar">
          <Grid item xs={8} className="search-box">
            <Box className="search-group">
              <NavLink className={"link-to-search"} to={"tim-kiem"}>
                <BiSearch className="search-icon" />
              </NavLink>
              <InputBase
                placeholder="Tìm kiếm khóa học, tài liệu,..."
                inputProps={{ "aria-label": "search" }}
                className="search-inp"
              ></InputBase>
            </Box>
          </Grid>

          <Grid item xs={4} className="avatar-notification_group">
            <Box className="avatar-notification_box">
              <IconButton
                size="large"
                aria-label="show new notifications"
                color="inherit"
                aria-controls={notificationMenuId}
                onClick={handleNotificationMenuOpen}
                className="notification_group"
              >
                <Badge badgeContent={notifications.length} color="error">
                  <IoNotificationsSharp />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={profileMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                className="avatar_group"
              >
                <Avatar
                  className="avatar"
                  alt="Remy Sharp"
                  src={
                    typeof UserInfo === "undefined"
                      ? "/default-avatar.png"
                      : UserInfo.avatar
                  }
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
      {renderMenu}
      {renderNotificationMenu}
    </div>
  );
}

export default ManagerHeader;
