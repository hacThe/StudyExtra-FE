import React, { useEffect } from 'react';
import './scss/ToastComponent.scss'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdCancel } from 'react-icons/md'
import { useSelector, useDispatch } from 'react-redux'
import { showToast, hideToast } from '../../actions/toast.action'
function ToastComponent(props) {
    const dispatch = useDispatch()
    const toast = useSelector(state => state.toast)
    console.log("toast", toast)

    useEffect(() => {
        let timer
        if (toast.isShow) {
            timer = setTimeout(() => {
                dispatch(hideToast())
            }, 2000)
        }
        return () => clearTimeout(timer)
    }, [toast])

    const handleClickHideToast = (e) => {
        dispatch(hideToast())
    }

    const handleShow = (e) => {
        console.log('click show')
        dispatch(showToast('fail', 'Get thành công'))
    }

    const renderType = () => {
        if (toast.typeToast == 'success') {
            return '#15B207'
        } else if (toast.typeToast == 'fail') {
            return '#A90000'
        }
        return '#15B207'
    }

    return (
        <div style={{ borderLeft: `4px solid ${renderType()}` }} className={toast.isShow ? 'toast show' : 'toast'}>
            <div style={{ alignItems: 'center', display: 'flex' }}>
                <div>
                    <AiFillCheckCircle onClick={handleShow} style={{ fontSize: '24px', color: renderType() }}></AiFillCheckCircle>
                </div>
                <div style={{ marginLeft: '14px' }}>
                    <div style={{ fontFamily: "'Montserrat', san-serif" }} className='title'>Success</div>
                    <div style={{ fontFamily: "'Montserrat', san-serif", paddingRight: '10px' }} className='Message'>
                        {toast.message}
                    </div>
                </div>
            </div>
            <div >
                <MdCancel onClick={handleClickHideToast} style={{ fontSize: '24px', color: '#767676', cursor: 'pointer' }}></MdCancel>
            </div>
        </div>
    );
}

export default ToastComponent;