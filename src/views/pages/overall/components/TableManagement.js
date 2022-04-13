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
    { stt: 2, id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { stt: 3, id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { stt: 4, id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { stt: 5, id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { stt: 6, id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { stt: 7, id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { stt: 8, id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { stt: 9, id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { stt: 8, id: 10, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { stt: 9, id: 11, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { stt: 8, id: 12, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { stt: 9, id: 13, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { stt: 8, id: 14, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { stt: 9, id: 15, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const columnDocs = [
    // {field: , headerName: , width: }
    {field: 'stt', headerName: "STT"},
    {field: 'name', headerName: "Tên tài liệu", width: 300},
    {field: 'type', headerName: "Phân loại"},
    {field: 'view', headerName: "Số lượt xem"},
    {field: 'time', headerName: "Thời gian"},
    {field: 'link', headerName: "Link"},
]

const rowDocs = [
    { id: 1, stt: 1, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 2, stt: 2, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 3, stt: 3, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 4, stt: 4, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 5, stt: 5, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 6, stt: 6, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 7, stt: 7, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 8, stt: 8, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 9, stt: 9, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 10, stt: 10, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 11, stt: 11, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 12, stt: 12, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 13, stt: 13, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 14, stt: 14, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 15, stt: 15, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 16, stt: 16, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 17, stt: 17, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 18, stt: 18, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},
    { id: 19, stt: 19, name: "Cách không làm mã vẫn có ăn", type: "Lớp 12", view: 1250, time:'15/12/2001', link: 'bac.com'},

]

const TableManageMent = () => {
    const [idSelect, setidSelect] = useState([]);
    const changeidSelect = (value) => {
        var newValue = idSelect;
        var isFind = false;
        for( var i = 0; i < newValue.length; i++){                           
            if ( newValue[i] === value) { 
                newValue.splice(i, 1); 
                i--;
                isFind = true; 
            }
        }
        if(isFind === false) {
            newValue.push(value);
        }
        console.log("newValue", newValue);
        return newValue;
    }
    const onCellClick = (params, event) => {
        // console.log("click on cell");
        console.log("params",params);
        changeidSelect(params.id);
    }

    const onRowClick = () => {
        // console.log("click on row");
    }

    return (
        <div 
            style={{ height: 750, width: '100%' }}
            className = "datagrid-container"
        >
            <DataGrid
                rows={rowDocs}
                columns={columnDocs}
                pageSize={10}
                // rowsPerPageOptions={[5,10]}
                checkboxSelection
                sx = {datagridSx}
                rowHeight={48}
                onCellClick={(params, event) => onCellClick(params, event)}
                onRowClick={() => onRowClick()}
            />
        </div>
    );
}

export default TableManageMent