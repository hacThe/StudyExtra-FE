import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Avatar, Modal, Box, Menu,MenuItem, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGem } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import './ManagerUser.scss';
import { useDispatch, useSelector } from "react-redux";

const ManagerUser = () => {

    const [anchorNt, setAnchorNt] = React.useState(null);
    const isNotificationMenuOpen = Boolean(anchorNt);

    const handleNotificationMenuOpen = (event) => {
        setAnchorNt(event.currentTarget);
      };
      const handleNotificationMenuClose = () => {
        setAnchorNt(null);
      };
    const gemRequests = [{}, {}, {}];
    const MenuId = "primary-search-notification-menu";
    
    const renderGemRequestMenu = (
        <Menu
          anchorEl={anchorNt}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          id={MenuId}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={isNotificationMenuOpen}
          onClose={handleNotificationMenuClose}
          className="notification-menu"
        >
          {gemRequests.map((item, index) => (
            <MenuItem
              key={index}
              onClick={handleNotificationMenuClose}
              className="gem-request_group"
            >
              <Avatar
                className="avatar"
                alt="Remy Sharp"
                src= "/default-avatar.png"
              />
              <p>This is content</p>
            </MenuItem>
          ))}
        </Menu>
      );
    
    return (
        <div className="manager-user-wrapper">
            <Container maxWidth={"xl"} className="users-manager">
                <div className="search-group">
                    <h1>Danh sách người dùng</h1>
                    <div className="inp-group">
                        <label>Nhập bất kì để tìm kiếm </label>
                        <input className="search-inp"></input>
                    </div>
                </div>

                <div className="btn-group">
                    <Badge badgeContent={gemRequests.length} color="error">
                        <Button 
                            variant="contained" 
                            className="gem-request"
                            aria-controls={MenuId}
                            onClick={handleNotificationMenuOpen}>
                            <FaGem />
                            Yêu cầu nạp GEM
                        </Button>
                    </Badge>
                    {renderGemRequestMenu}
                    <Button className="btn-export">
                        <AiOutlineExport />
                        Xuất file
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default ManagerUser;
