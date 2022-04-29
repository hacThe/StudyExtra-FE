import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './TransactionTable.scss';

const datagridSx = {
    borderRadius: 2,
    "& .MuiDataGrid-main": { borderRadius: 2 },
    "& .css-jz7yqw-MuiDataGrid-virtualScrollerContent": {
        height: "100% !important"
    },
    '& div[data-rowIndex][role="row"]': {
        color: "#000",
        fontSize: 14,
        //risky
        minHeight: "40px !important",
        height: "40px !important",
        "& div": {
            minHeight: "40px !important",
            height: "40px !important",
            lineHeight: "40px !important"
        },
        '& .super-app.negative': {
            color: '#B64646',
        },
        '& .super-app.positive::before': {
            content: '"+"'
        },
        '& .super-app.positive': {
            color: '#007B14',
        },
    },
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "rgba(123, 104, 238, 0.25)",
        color: "#000",
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Montserrat',
    },
    "& .MuiTablePagination-root": {
        fontSize: 14
    },
    "& MuiTablePagination-displayedRows": {
        fontSize: 14
    }
};


const TransactionTable = ({ rowDocs, columnDocs, filter }) => {
    const [idSelect, setidSelect] = useState([]);
    const changeidSelect = (value) => {
        var newValue = idSelect;
        var isFind = false;
        for (var i = 0; i < newValue.length; i++) {
            if (newValue[i] === value) {
                newValue.splice(i, 1);
                i--;
                isFind = true;
            }
        }
        if (isFind === false) {
            newValue.push(value);
        }
        console.log("newValue", newValue);
        return newValue;
    }
    const onCellClick = (params, event) => {
        // console.log("click on cell");
        console.log("params", params);
        changeidSelect(params.id);
    }

    const onRowClick = () => {
        // console.log("click on row");
    }

    const getShowingData = (filter) => {
        if(filter=="") return rowDocs;
        var res = []; 
        rowDocs.map((rowDoc) => {
            var vals = Object.values(rowDoc);
            var isFind = false;
            vals.forEach(val => {
                if(val.toString().indexOf(filter)!=-1){
                    isFind = true;
                }
            });
            if(isFind) return res.push(rowDoc); 
        })
        // console.log("res", res);
        return res;
    }

    return (
        <div
            style={{ height: 550, width: '100%' }}
            className="datagrid-container"
        >
            <DataGrid
                rows={getShowingData(filter)}
                columns={columnDocs}
                pageSize={10}
                rowsPerPageOptions={[10]}
                sx={datagridSx}
                onCellClick={(params, event) => onCellClick(params, event)}
                onRowClick={() => onRowClick()}
            />
        </div>
    );
}

export default TransactionTable;