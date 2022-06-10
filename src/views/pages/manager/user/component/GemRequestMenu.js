import React, { useEffect, useState } from "react";
import { Avatar, Menu, MenuItem, Badge } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";

const GemRequestMenu = (props) => {
    const gemRequestMenu = (
        <Menu
            anchorEl={props.anchorNt}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
            id={props.BadgeMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={props.isNotificationMenuOpen}
            onClose={props.handleNotificationMenuClose}
            className="notification-menu"
        >
            {props.gemRequests.map((item, index) => (
                <MenuItem
                    key={index}
                    onClick={props.handleNotificationMenuClose}
                    className="gem-request_group"
                >
                    <Avatar
                        className="avatar"
                        alt="Remy Sharp"
                        src="/default-avatar.png"
                    />
                    <p>This is content</p>
                </MenuItem>
            ))}
        </Menu>
    )
    return (
        <>
                {gemRequestMenu}

        </>
    );
};

export default GemRequestMenu;
