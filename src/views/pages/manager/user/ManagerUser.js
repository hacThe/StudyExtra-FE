import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaGem } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import './ManagerUser.scss';
import GemRequestMenu from './component/GemRequestMenu';
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "./component/UsersTable";
import DataTableComponent from "../../../components/DataTableComponent";



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
    { field: 'name', headerName: "Tên người dùng", width: 200 },
    { field: 'email', headerName: "Email", width: 200 },
    { field: 'phone', headerName: "Số điện thoại", width: 120 },
    { field: 'role', headerName: "Loại người dùng", width: 150 }
  ]

  const rowUsers = [
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


          <DataTableComponent
            onRowClick={()=>alert("Click")}
            columnDocs={columnUsers}
            rowDocs={rowUsers}
            filter={filter}
          ></DataTableComponent>
      </Container>
    </div>
  );
};

export default ManagerUser;
