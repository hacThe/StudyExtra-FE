import React, { useState } from "react";
import "./scss/DataTableComponent.scss";

import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";

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
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport
          excelOptions={{
            columnsStyles: {
              // replace the dd.mm.yyyy default date format
              recruitmentDay: { numFmt: "dd/mm/yyyy" },
              // set this column in green
              incomes: { font: { argb: "FF00FF00" } },
            },
          }}
        />
      </GridToolbarContainer>
    );
  }

  const [selectionModel, setSelectionModel] = React.useState([]);

  const handleOnRowClick = (e) => {
    if (onRowClick) {
      onRowClick(e);
    } else alert(JSON.stringify(e), null, 2);
    console.log(e);
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
          <strong onClick={() => alert("Xóa hàng")}>Xóa hàng đã chọn</strong>
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
        // components={{
        //   Toolbar: CustomToolbar,
        // }}
      />
    </div>
  );
};

export default DataTableComponent;
