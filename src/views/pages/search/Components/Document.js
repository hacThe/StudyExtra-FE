import React from 'react';
import DocumentCard from './DocumentCard';
import PaginationOutlined from './PaginationOutlined';
import '../Search.scss'
import { useState, useEffect } from 'react'

function Document(props) {
    const [page, setPage] = useState(1);
    useEffect(() => {
        setPage(1)
    }, [props.exam])

    const setCurrentPage = (num) => {
        setPage(num)
    }
    return (
        <div style={{ marginTop: '10px' }}>
            {props.document.length !== 0 ? props.document.map((document, num) => {
                if (num < page * 8 && num >= (page - 1) * 8) {
                    return (
                        <DocumentCard document={document}></DocumentCard>
                    )
                }
            })
                :
                <h1>Không có kết quả tìm kiếm</h1>
            }
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <PaginationOutlined setCurrentPage={setCurrentPage} page={page} index={props.document.length}></PaginationOutlined>
            </div>
        </div>
    );
}

export default Document;