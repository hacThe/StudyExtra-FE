import React from 'react';

function LeadingIconButton(props) {
    return (
        <div>
            <div className="leading-icon-button">
                {
                    props.icon
                }
                <div className="content">
                    {props.content}
                </div>
            </div>
            
        </div>
    );
}

export default LeadingIconButton;