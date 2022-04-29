import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGem } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import './ManagerUser.scss';
import GemRequestMenu from './component/GemRequestMenu';
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "./component/UsersTable";



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


  var [filter, setFilter] = useState('');
  var changeFilter = (e) => {
    setFilter(e.target.value);
  }

  const columnUsers = [
    // {field: , headerName: , width: }
    { field: 'stt', headerName: "STT", width: 100 },
    { field: 'username', headerName: "Username", width: 120 },
    { field: 'ten', headerName: "Tên người dùng", width: 200 },
    { field: 'ngaysinh', headerName: "Ngày sinh", width: 100 },
    { field: 'gioitinh', headerName: "Giới tính", width: 100 },
    { field: 'email', headerName: "Email", width: 200 },
    { field: 'sdt', headerName: "Số điện thoại", width: 120 },
    { field: 'loai', headerName: "Loại người dùng", width: 150 }
  ]

  const rowUsers = [
    { id: 1, stt: 1, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 2, stt: 2, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 3, stt: 3, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 4, stt: 4, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 5, stt: 5, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 6, stt: 6, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 7, stt: 7, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 8, stt: 8, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 9, stt: 9, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 10, stt: 10, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 11, stt: 11, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 12, stt: 12, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 13, stt: 13, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 14, stt: 14, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 15, stt: 15, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 16, stt: 16, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 17, stt: 17, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"},
    { id: 18, stt: 18, username: "tanthanh", ten: "Nguyễn Tấn Thành", ngaysinh: "16/04/2001", gioitinh: 'nam', email: "tanthanhe@gmail.com", sdt:"0912511015", loai: "user"}
  ]

  return (
    <div className="manager-user-wrapper">
      <Container maxWidth={"xl"}>
        <div className="users-manager">
          <div className="search-group">
            <h1>Danh sách người dùng</h1>
            <div className="inp-group">
              <label>Nhập bất kì để tìm kiếm </label>
              <input className="search-inp" type='text' onChange={(e) => changeFilter(e)}></input>
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
            <GemRequestMenu
              handleNotificationMenuOpen={handleNotificationMenuOpen}
              handleNotificationMenuClose={handleNotificationMenuClose}
              MenuId={MenuId}
              anchorNt={anchorNt}
              setAnchorNt={anchorNt}
              gemRequests={gemRequests}
              isNotificationMenuOpen={isNotificationMenuOpen}
            ></GemRequestMenu>
            <Button className="btn-export">
              <AiOutlineExport />
              Xuất file
            </Button>
          </div>
        </div>


          <UsersTable
            columnDocs={columnUsers}
            rowDocs={rowUsers}
            filter={filter}
          ></UsersTable>
      </Container>
    </div>
  );
};

export default ManagerUser;
