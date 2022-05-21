import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Badge } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { FaGem } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import './ManagerUser.scss';
import GemRequestMenu from './component/GemRequestMenu';
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "./component/UsersTable";
import DataTableComponent from "../../../components/DataTableComponent";
import { userActions } from "../../../../actions";
import { transactionActions } from "../../../../actions/transaction.action";



const ManagerUser = () => {

  const [anchorNt, setAnchorNt] = React.useState(null);
  const isNotificationMenuOpen = Boolean(anchorNt);

  const handleDepositRequestOnClick = ()=>{
    navigate('/quan-ly/nguoi-dung/yeu-cau-nap-gem')
  }


  const handleNotificationMenuOpen = (event) => {
    setAnchorNt(event.currentTarget);
  };
  const handleNotificationMenuClose = () => {
    setAnchorNt(null);
  };
  const gemRequests = [{}, {}, {}];
  const MenuId = "primary-search-notification-menu";
  const dispatch = useDispatch()
  const userList = useSelector(state=>state.user.users) || [];

  useEffect(()=>{
    dispatch(userActions.getAll());
    dispatch(transactionActions.getDepositeGemRequest())
  }, [])

  const transactionRequest = useSelector(state=>state.transactionReducer.transactions)

  var [filter, setFilter] = useState('');
  var changeFilter = (e) => {
    setFilter(e.target.value);
  }

  const navigate = useNavigate()
  const columnUsers = [
    // {field: , headerName: , width: }
    { field: 'stt',  headerName: "STT", width: 100 },
    { field: 'username', headerName: "Username", width: 120 },
    { field: 'name', headerName: "Tên người dùng", width: 200, flex: 1 },
    { field: 'mail', headerName: "Email", width: 200, flex: 1 },
    { field: 'gem', headerName: "Tổng số GEM", width: 200},
    { field: 'phone', headerName: "Số điện thoại", width: 120 },
    { field: 'role', headerName: "Phân quyền", width: 150 }
  ]

  const handleRowOnClick = (id)=>{
    navigate(`/quan-ly/nguoi-dung/${id}`)
  }

  return (
    <div className="manager-user-wrapper manager-fa-ke-modal">
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
            <Badge badgeContent={transactionRequest.length} color="error">
              <Button
                variant="contained"
                className="gem-request"
                aria-controls={MenuId}
                onClick={handleDepositRequestOnClick}>
                <FaGem />
                Yêu cầu nạp GEM
              </Button>
            </Badge>
            {/* <GemRequestMenu
              handleNotificationMenuOpen={handleNotificationMenuOpen}
              handleNotificationMenuClose={handleNotificationMenuClose}
              MenuId={MenuId}
              anchorNt={anchorNt}
              setAnchorNt={anchorNt}
              gemRequests={gemRequests}
              isNotificationMenuOpen={isNotificationMenuOpen}
            ></GemRequestMenu> */}
            <Button className="btn-export">
              <AiOutlineExport />
              Xuất file
            </Button>
          </div>
        </div>


          <DataTableComponent
            onRowClick={(e)=>handleRowOnClick(e.id)}
            columnDocs={columnUsers}
            rowDocs={userList.map((item, index)=>{
              item.stt = index + 1
              item.id = item._id
              return item
            })}
            filter={filter}
          ></DataTableComponent>
      </Container>
    </div>
  );
};

export default ManagerUser;
