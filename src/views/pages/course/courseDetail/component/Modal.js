import React from 'react';

function Modal(props) {
    return (
        <div className='modal-wrapper'>
            <div className="modal-overlay">

            </div>
            <div className="modal-content">
                {
                    props.component
                }
            </div>
        </div>
    );
}

export default Modal;