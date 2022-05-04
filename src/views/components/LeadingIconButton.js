import React from 'react';

function LeadingIconButton(props) {
    return (
            <div onClick={props.onClick} className="leading-icon-button">
                {
                    props.icon
                }
                <div className="content">
                    {props.content}
                </div>
            </div>
    );
}

export default LeadingIconButton;