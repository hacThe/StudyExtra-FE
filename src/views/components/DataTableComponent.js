import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./scss/DataTableComponent.scss";

const datagridSx = {
  borderRadius: 2,
  "& .MuiDataGrid-main": { borderRadius: 2 },
  '& div[data-rowIndex][role="row"]': {
    color: "#000",
    fontSize: 14,
    //risky
    minHeight: "60px !important",
    height: 60,
    "& div": {
      minHeight: "60px !important",
      height: 60,
      lineHeight: "59px !important",
    },
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "rgba(123, 104, 238, 0.25)",
    color: "#000",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
  },
  "& .MuiTablePagination-root": {
    fontSize: 14,
  },
  "& MuiTablePagination-displayedRows": {
    fontSize: 14,
  },
};

const DataTableComponent = ({ rowDocs, columnDocs, filter, onRowClick }) => {
  const [selectionModel, setSelectionModel] = React.useState([]);

  const handleOnRowClick = (e) => {
    if (onRowClick) {
      onRowClick(e);
    } else console.log(e);
  };

  const getShowingData = (filter) => {
    if (filter == "") return rowDocs;
    var res = [];
    rowDocs.map((rowDoc) => {
      var vals = Object.values(rowDoc);
      var isFind = false;
      vals.forEach((val) => {
        if (val.toString().indexOf(filter) != -1) {
          isFind = true;
        }
      });
      if (isFind) return res.push(rowDoc);
    });
    return res;
  };

  return (
    <div
      style={{ height: 750, width: "100%" }}
      className="datagrid-container-wrapper"
    >
      {selectionModel?.length > 0 && (
        <span className="selected-rows-count">
          Đã chọn {selectionModel.length} hàng.{" "}
          <strong>Xóa hàng đã chọn</strong>
        </span>
      )}
      <DataGrid
        rows={getShowingData(filter)}
        columns={columnDocs}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
          console.log(selectionModel);
        }}
        selectionModel={selectionModel}
        sx={datagridSx}
        rowHeight={48}
        onRowClick={handleOnRowClick}
        disableSelectionOnClick
        hideFooterSelectedRowCount
      />
    </div>
  );
};

export default DataTableComponent;
