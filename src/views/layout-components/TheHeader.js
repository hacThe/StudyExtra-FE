import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  MenuItem,
  Avatar,
  Menu,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  Button,
} from "@mui/material";

import { BsBarChartFill, BsQuestionCircleFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { FaLightbulb, FaHeadphones } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoNotificationsSharp, IoHome } from "react-icons/io5";
import "./TheHeader.scss";
import { searchAction } from "../../actions/search.action";
import { userActions } from "../../actions/user.actions";
import { ResetPasswordModal } from "../pages/profile/component/ResetPasswordModal";

function TheHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNt, setAnchorNt] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isNotificationMenuOpen = Boolean(anchorNt);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  const UserInfo = useSelector((state) => state.user.currentUser);
  console.log({ UserInfo })

  const dispatch = useDispatch();

  //----------------
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const [passwordModal, setPasswordModal] = useState(false);

  //-----------Search
  const [search, setSearch] = useState("");

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleClickSearch = (event) => {
    dispatch(searchAction.getSearch(search));
  };

  const handleKeyPressSearch = (event) => {
    if (event.key === "Enter") {
      let elenmentLinkToSearch = document.querySelector(".link-to-search");
      dispatch(searchAction.getSearch(search));
      elenmentLinkToSearch.click();
    }
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
console.log("notificstion: ", notifications);//////////
  useEffect(async () => {
    if (isLoggedIn) {
      dispatch(userActions.getCurrentUser());
      dispatch(userActions.getUserNotifications());
    }
  }, []);

  //--------------------------------------------------------------PROFILE-MENU-------------------------------------------------------//
  const profileMenuId = "primary-search-account-menu";
  function handleLogout() {
    dispatch(userActions.logout());
    /*   navigate("/dang-nhap"); */
  }
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
            src={isLoggedIn && UserInfo?.avatar}
          />
        </Grid>
        <Grid item xs={8}>
          <h6>{isLoggedIn && UserInfo?.username}</h6>
          <p>{isLoggedIn && UserInfo?.gem}</p>
        </Grid>
      </MenuItem>
      <Link to="/thong-tin-tai-khoan">
        <MenuItem onClick={handleMenuClose}>Thông tin tài khoản</MenuItem>
      </Link>

      {isLoggedIn && UserInfo?.role === "admin" && (
        <a href="/quan-ly">
          <MenuItem onClick={handleMenuClose}>Quản lí</MenuItem>
        </a>
      )}

      <MenuItem
        onClick={() => {
          setPasswordModal(true);
          handleMenuClose();
        }}
      >
        Đổi mật khẩu
      </MenuItem>
      {passwordModal && (
        <ResetPasswordModal
          isOpen={passwordModal}
          setPassOpen={setPasswordModal}
        />
      )}
      <MenuItem onClick={handleLogout}>Đăng xuất</MenuItem>
    </Menu>
  );
  //--------------------------------------------------------------NOTIFICATION-MENU-------------------------------------------------------//
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
      {notifications.length > 0 && notifications.map((item, index) => (
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
          style={{ fontSize: "1.5rem" }}
        >
          Không có thông báo nào
        </MenuItem>
      }
    </Menu>
  );
  //------------------------------------------MOBILE MENU---------------------------------------------//

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

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
      link: "/luyen-de",
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="mobile-navbar"
    >
      {isLoggedIn && (
        <>
          <Link to={"/thong-tin-tai-khoan"}>
            <MenuItem>
              <Grid item xs={4} style={{ paddingRight: "1rem" }}>
                <Avatar
                  className="avatar"
                  alt="Remy Sharp"
                  src={isLoggedIn && UserInfo?.avatar}
                />
              </Grid>
              <Grid item xs={8}>
                <h6>{isLoggedIn && UserInfo?.username}</h6>
                <p>{isLoggedIn && UserInfo?.gem} GEM</p>
              </Grid>
            </MenuItem>
          </Link>
        </>
      )}

      <Divider />
      <List>
        {menuList.map((item, index) => (
          <NavLink to={item.link} key={index}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
      {!isLoggedIn && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {LoginBtn}
        </div>
      )}
    </Box>
  );
  //-----------------------------------------------------------Notification-Avatar_GROUP--------------------------------------------//

  const NotificationAvatarGroup = (
    <Grid item md={4} xs={3} className="avatar-notification_group">
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
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Avatar
            className="avatar"
            alt="Remy Sharp"
            src={isLoggedIn && UserInfo?.avatar}
          />
        </IconButton>
      </Box>
    </Grid>
  );
  const navigate = useNavigate();
  const LoginBtn = (
    <Grid item md={4} xs={3} className="avatar-notification_group">
      <Button
        variant="contained"
        style={{
          background: "#7B68EE",
          textTransform: "none",
          fontFamily: "Montserrat",
          fontSize: "1.4rem",
        }}
        onClick={() => {
          return navigate("./dang-nhap");
        }}
      >
        Đăng nhập
      </Button>
    </Grid>
  );

  //---------------------------------------------------------------------------------------------------------------------//
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="the-header">
          <Grid container className="toolbar">
            <Grid
              item
              sx={{ display: { xs: "flex", md: "none" } }}
              xs={3}
              className="mobile-menu-btn"
            >
              <Box>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  onClick={toggleDrawer("left", true)}
                  color="inherit"
                >
                  <AiOutlineMenu />
                </IconButton>
                <Drawer
                  anchor="left"
                  open={state["left"]}
                  onClose={toggleDrawer("left", false)}
                >
                  {list("left")}
                </Drawer>
              </Box>
            </Grid>
            <Grid
              item
              sx={{ display: { xs: "none", md: "flex" } }}
              md={4}
              className="logo_group"
            >
              <Link to="/trang-chu">
                <Avatar
                  sx={{ bgcolor: "green[500]", width: 36, height: 36 }}
                  variant="rounded"
                  src="/SE-LOGO.png"
                ></Avatar>
              </Link>
              <Typography
                variant="h6"
                noWrap
                component="div"
                className="logo_group-name"
              >
                Học tiếng anh cùng SE
              </Typography>
            </Grid>

            <Grid item md={4} xs={6} className="search-box">
              <Box className="search-group">
                <NavLink className={"link-to-search"} to={"tim-kiem"}>
                  <BiSearch
                    onClick={(e) => handleClickSearch(e)}
                    className="search-icon"
                  />
                </NavLink>
                <InputBase
                  placeholder="Tìm kiếm khóa học, tài liệu,..."
                  inputProps={{ "aria-label": "search" }}
                  className="search-inp"
                  onKeyPress={(e) => handleKeyPressSearch(e)}
                  onChange={(e) => handleChangeSearch(e)}
                ></InputBase>
              </Box>
            </Grid>
            {!isLoggedIn ? LoginBtn : NotificationAvatarGroup}
          </Grid>
          {UserInfo && renderMenu}
          {UserInfo && renderNotificationMenu}
        </AppBar>
        {isLoggedIn && renderMenu}
        {isLoggedIn && renderNotificationMenu}
      </Box>
    </>
  );
}
export default React.memo(TheHeader);
