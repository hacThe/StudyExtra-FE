import React , {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../scss/TableManagement.scss';

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
            lineHeight: "59px !important"
        }
    },
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "rgba(123, 104, 238, 0.25)",
        color: "#000",
        fontSize: 14
    },
    "& .MuiTablePagination-root": {
        fontSize: 14
    },
    "& MuiTablePagination-displayedRows": {
        fontSize: 14
    }
};

const columns = [
    { field: 'stt', headerName: 'STT', width: 160 },
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
    { stt: 1, id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { stt: 2, id: 1, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { stt: 3, id: 1, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { stt: 4, id: 1, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { stt: 5, id: 1, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { stt: 6, id: 1, lastName: 'Melisandre', firstName: null, age: 150 },
    { stt: 7, id: 1, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { stt: 8, id: 1, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { stt: 9, id: 1, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { stt: 8, id: 1, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { stt: 9, id: 1, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { stt: 8, id: 1, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { stt: 9, id: 1, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { stt: 8, id: 1, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { stt: 9, id: 1, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const TableManageMent = () => {


      
    const onCellClick = () => {
        console.log("click on cell");
    }

    const onRowClick = () => {
        console.log("click on row");
    }

    return (
        <div 
            style={{ height: 750, width: '100%' }}
            className = "datagrid-container"
        >
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5,10]}
                checkboxSelection
                sx = {datagridSx}
                rowHeight={48}
                onCellClick={() => onCellClick()}
                onRowClick={() => onRowClick()}

            />
        </div>
    );
}

export default TableManageMent