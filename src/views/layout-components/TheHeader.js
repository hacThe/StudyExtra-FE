import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Avatar, Menu, Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';

import { BsBarChartFill, BsQuestionCircleFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { FaLightbulb, FaHeadphones } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoNotificationsSharp, IoHome } from "react-icons/io5";
import './TheHeader.scss';

function TheHeader() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorNt, setAnchorNt] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isNotificationMenuOpen = Boolean(anchorNt);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
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
  //--------------------------------------------------------------PROFILE-MENU-------------------------------------------------------//
  const profileMenuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={profileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className='profile-menu'
    >
      <MenuItem className='profile_group'>
        <Grid item xs={4}>
          <Avatar className='avatar' alt="Remy Sharp" src="https://vieclamthemonline.com/wp-content/uploads/2021/10/anh-blackpink-rose.jpg" />
        </Grid>
        <Grid item xs={8}>
          <h6>Username</h6>
          <p>500 GEM</p>
        </Grid>
      </MenuItem>
      <Link to='/profile'>
        <MenuItem onClick={handleMenuClose}>Thông tin tài khoản</MenuItem>
      </Link>
      <MenuItem onClick={handleMenuClose}>Đổi mật khẩu</MenuItem>
      <MenuItem onClick={handleMenuClose}>Đăng xuất</MenuItem>
    </Menu>
  );
  //--------------------------------------------------------------NOTIFICATION-MENU-------------------------------------------------------//
  const notificationMenuId = 'primary-search-notification-menu';
  const notificationContent1 = 'đã bình luận bài viết của bạn';
  const notificationContent2 = 'Chào mừng bạn đã gia nhập F8. Hãy luôn đam mê, kiên trì và theo đuổi mục tiêu tới cùng bạn nhé ❤️';
  const typeNotification = ['comment', 'system']//
  const tagName = 'Hiển Thế';
  const NotificationContent = (props) => {
    const comment = <p className='notification-content'><span style={{ fontWeight: "bold" }}>{tagName}</span>{' '}{notificationContent1}</p>;
    const systemNotification = <p className='notification-content'>{notificationContent2}</p>;
    return (
      props.type === "comment" ? comment : systemNotification
    )
  }

  const renderNotificationMenu = (
    <Menu
      anchorEl={anchorNt}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      id={notificationMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
      className='notification-menu'
    >
      <MenuItem onClick={handleNotificationMenuClose} className='notification_group'>
        <Avatar className='avatar' alt="Remy Sharp" src="https://vieclamthemonline.com/wp-content/uploads/2021/10/anh-blackpink-rose.jpg" />
        <NotificationContent type={typeNotification[0]} />
      </MenuItem>

      <MenuItem onClick={handleNotificationMenuClose} className='notification_group'>
        <Avatar className='avatar' alt="Remy Sharp" src="https://vieclamthemonline.com/wp-content/uploads/2021/10/anh-blackpink-rose.jpg" />
        <NotificationContent type={typeNotification[1]} />
      </MenuItem>
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
      link: "/trang-chu"
    },
    {
      name: "Học",
      icon: <FaLightbulb />,
      link: "/404"
    },
    {
      name: "Hỏi đáp",
      icon: <FaHeadphones />,
      link: "/404"
    },
    {
      name: "Tài liệu",
      icon: <IoIosDocument />,
      link: "/404"
    },
    {
      name: "Xếp hạng",
      icon: <BsBarChartFill />,
      link: "/404"
    },
    {
      name: "Luyện đề",
      icon: <BsQuestionCircleFill />,
      link: "/404"
    }
  ]

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='mobile-navbar'
    >
      <Link to={'/profile'}>
        <MenuItem>
          <Grid item xs={4}>
            <Avatar className='avatar' alt="Remy Sharp" src="https://vieclamthemonline.com/wp-content/uploads/2021/10/anh-blackpink-rose.jpg" />
          </Grid>
          <Grid item xs={8}>
            <h6>Username</h6>
            <p>500 GEM</p>
          </Grid>
        </MenuItem>
      </Link>
      <Divider />
      <List>
        {menuList.map((item, index) => (
          <NavLink to={item.link} key={index}>
            <ListItem button>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  );

  //---------------------------------------------------------------------------------------------------------------------//
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="the-header">
          <Toolbar className='toolbar'>
            <Grid item sx={{ display: { xs: 'flex', md: 'none' }}} xs={3} className='mobile-menu-btn'>
              <Box>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-haspopup="true"
                  onClick={toggleDrawer('left', true)}
                  color="inherit"
                >
                  <AiOutlineMenu />
                </IconButton>
                <Drawer
                  anchor='left'
                  open={state['left']}
                  onClose={toggleDrawer('left', false)}
                >
                  {list('left')}
                </Drawer>
              </Box>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', md: 'flex' }}} md={4} className="logo_group" >
              <Link to='/trang-chu'>
                <Avatar sx={{ bgcolor: "green[500]", width: 36, height: 36 }} 
                  variant="rounded"
                  src="https://fullstack.edu.vn/assets/icon/f8_icon.png">
                </Avatar>
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
              <Box className='search-group'>
                <BiSearch className='search-icon' />
                <InputBase
                  placeholder="Tìm kiếm khóa học, tài liệu,..."
                  inputProps={{ 'aria-label': 'search' }}
                  className="search-inp">
                </InputBase>
              </Box>
            </Grid>

            <Grid item md={4} xs={3} className="avatar-notification_group">
              <Box className="avatar-notification_box">
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                  aria-controls={notificationMenuId}
                  onClick={handleNotificationMenuOpen}
                  className='notification_group'
                >
                  <Badge badgeContent={17} color="error">
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
                  className='avatar_group'
                  sx={{ display: { xs: 'none', md: 'flex' }}}
                >
                  <Avatar className='avatar' alt="Remy Sharp" src="https://vieclamthemonline.com/wp-content/uploads/2021/10/anh-blackpink-rose.jpg" />
                </IconButton>
              </Box>
            </Grid>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderNotificationMenu}
      </Box>
    </>
  );

}
export default React.memo(TheHeader);