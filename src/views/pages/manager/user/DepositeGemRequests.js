import React, { useEffect, useState } from "react";
import { GrDocumentExcel } from "react-icons/gr";
import DataTableComponent from "../../../components/DataTableComponent";
import LeadingIconButton from "../../../components/LeadingIconButton";
import {
  AiOutlineExport,
  AiOutlineEdit,
  AiOutlineDelete,
} from "react-icons/ai";
import BackToPageButton from "../../../components/BackToPageButton";
import { useDispatch, useSelector } from "react-redux";
import { transactionActions } from "../../../../actions/transaction.action";
function DepositeGemRequests(props) {
  const [filter, setFilter] = useState("");
  const changeFilter = (e) => {
    setFilter(e.target.value);
  };
  const dispatch = useDispatch();
  const transactions = useSelector(
    (state) => state.transactionReducer.transactions
  );
  useEffect(() => {
    dispatch(transactionActions.getDepositeGemRequest());
  }, []);

  const handleDeleteTransaction = (transaction) => {
    dispatch(transactionActions._delete(transaction));
  };

  const handleConfirmTransaction = (transaction) => {
    dispatch(transactionActions.confirm(transaction));
  };

  const fields = [
    // {field: , headerName: , width: }
    { field: "stt", headerName: "STT" },
    { field: "username", headerName: "Username" },
    { field: "amount", headerName: "Số tiền (GEM)", flex: 1, minWidth: 100 },
    { field: "phone", headerName: "Số điện thoại", width: 150 },
    {
      field: "time",
      headerName: "Thời gian",
      width: 150,
    },
    // valueGetter: (params) => (params.sex === 0 ? "Nữ" : "Nam"),
    { field: "bankSend", headerName: "Ngân hàng gửi", flex: 1, minWidth: 100 },
    { field: "stk", headerName: "Số tài khoản", width: 150 },
    {
      field: "bankReceive",
      headerName: "Ngân hàng nhận",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "action",
      headerName: "Tùy chọn",
      minWidth: 180,
      renderCell: (params) => (
        // <span
        //   className="delete-button-on-table"
        //   onClick={(e) => {
        //     e.stopPropagation();
        //     alert(JSON.stringify(params.row, null, 2));
        //   }}
        // >
        //   <AiOutlineDelete size={20} />
        // </span>

        <div
          style={{ width: "100%", paddingRight: "12px" }}
          className="justify-content-between"
        >
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteTransaction(params.row)
            }}
            style={{ marginRight: "12px" }}
            className="se-action-btn danger"
          >
            Xóa
          </span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              handleConfirmTransaction(params.row)
            }}
            className="se-action-btn"
          >
            Xác nhận
          </span>
        </div>
      ),
    },
  ];

  const students = [
    {
      id: 1,
      stt: 1,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 600,
    },
    {
      id: 2,
      stt: 2,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },

    {
      id: 3,
      stt: 3,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },

    {
      id: 4,
      stt: 4,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },

    {
      id: 5,
      stt: 5,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },

    {
      id: 6,
      stt: 6,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },

    {
      id: 7,
      stt: 7,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },

    {
      id: 8,
      stt: 8,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },

    {
      id: 9,
      stt: 9,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },

    {
      id: 10,
      stt: 10,
      username: "hacThe",
      phone: "0334696473",
      time: "07/08/2009",
      bankSend: "Vietcombank",
      bankReceive: "BIDV",
      gem: 500,
    },
  ];

  return (
    <div className="manager-fa-ke-modal">
      <BackToPageButton content="Danh sách người dùng" />
      <div className="student-in-course-table">
        <h1 className="mb-3" style={{ margin: "12px 0" }}>
          Danh sách yêu cầu nạp GEM
        </h1>
        <div className="table-container">
          <div className="table-header justify-content-between">
            <div className="filter-container">
              <p style={{ fontSize: "1.4rem" }} className="filter-label">
                Nhập bất kỳ để tìm kiếm
              </p>
              <input
                className="filter-input"
                type="text"
                onChange={(e) => changeFilter(e)}
              ></input>
            </div>

            <LeadingIconButton
              icon={<GrDocumentExcel />}
              content={"Xuất Exel"}
            />
          </div>
          <DataTableComponent
            columnDocs={fields}
            rowDocs={transactions.map((item, index) => {
              item.stt = index + 1;
              item.id = item._id;
              item.bankSend = item.context?.bankSend;
              item.bankReceive = item.context?.bankReceive;
              item.time = item.createdAt;
              item.username = item.username;
              item.phone = item.userID?.phone;
              item.stk = item.context?.transactionNumber;
              return item;
            })}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default DepositeGemRequests;
