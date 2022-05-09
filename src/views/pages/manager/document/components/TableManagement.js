import React , {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../scss/TableManagement.scss';
import {documentActions} from '../../../../../actions/document.actions.js'
import { useDispatch, useSelector } from "react-redux";

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

const TableManageMent = ({rowDocs,columnDocs, filter}) => {

    const dispatch = useDispatch();
    const addManageDocument = () => {
        if(document.querySelector('.MuiDataGrid-selectedRowCount') != null){
            const element = document.querySelector('.MuiDataGrid-selectedRowCount');
            console.log(element);
        }
        console.log("idSelect",idSelect);
    }


    const divContainer = document.createElement('div');
    divContainer.classList.add('div-custom-manage');
    var isLoaded = false;


    const [idSelect, setidSelect] = useState([]);
    const changeidSelect = (value) => {
        console.log("value", value)
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

        setidSelect(newValue);    
    }

    const deleteDocument = ()  => {
        console.log("delete Doc");
        console.log("idSelect", idSelect);
        dispatch(documentActions.deleteMultiDocuments({data: {...idSelect}}));
        if(deleteButton.parentNode!=null)
            deleteButton.parentNode.removeChild(deleteButton);
    }

    const editDocument = ()  => {
        console.log("edit Doc");
    }

    const editButton = document.createElement('button');
    editButton.classList.add('edit-document-button');
    editButton.textContent = "SỬA";
    editButton.onclick = (e) => {
        editDocument();
    }

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-document-button');
    deleteButton.textContent = "XOÁ";
    deleteButton.onclick = (e) => {
        deleteDocument();
    }

    const onCellClick = (params, event) => {
        if(!isLoaded)
        {
            var ele = document.querySelector('.MuiDataGrid-footerContainer');
            ele.insertBefore(divContainer, ele.children[0]);
            isLoaded = true;
        }
        console.log("params",params);
        changeidSelect(params.id);
        addManageDocument();
        const element = divContainer;
        if(idSelect.length >= 2){
            if(editButton.parentNode!=null)
                editButton.parentNode.removeChild(editButton);
            if(deleteButton.parentNode!=null)
                deleteButton.parentNode.removeChild(deleteButton);
            element.insertBefore(deleteButton, element.children[0]);
        }
        else if(idSelect.length  == 1){
            if(editButton.parentNode!=null)
                editButton.parentNode.removeChild(editButton);
            if(deleteButton.parentNode!=null)
                deleteButton.parentNode.removeChild(deleteButton);
            element.insertBefore(editButton, element.children[0]);
            element.insertBefore(deleteButton, element.children[0]);
        }
        else if(idSelect.length  == 0) {
            if(editButton.parentNode!=null)
                editButton.parentNode.removeChild(editButton);
            if(deleteButton.parentNode!=null)
                deleteButton.parentNode.removeChild(deleteButton);
        }
    }

    const onRowClick = () => {
        // console.log("click on row");
    }

    const getShowingData = (filter) => {
        console.log("filter", filter);
        if(filter=="") return rowDocs;
        
        var res = []; 
        rowDocs.map((rowDoc) => {
            var vals = Object.values(rowDoc);
            var isFind = false;
            vals.forEach(val => {
                if(typeof val!="undefined")
                if(val.toString().indexOf(filter)!=-1){
                    isFind = true;
                }
            });
            if(isFind) return res.push(rowDoc); 
        })
        console.log("res", res);
        return res;
    }


    
    return (
        <div 
            style={{ height: 750, width: '100%' }}
            className = "datagrid-container"
        >
            <DataGrid
                rows={getShowingData(filter)}
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