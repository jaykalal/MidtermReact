import React from 'react';

function ActionBtn({ text, onActionClick, disabled }) {
    return (
        <div className={`action-btn ${disabled ? ' disabled ' : ''}`} onClick={() => !disabled ? onActionClick() : null}>{text}</div>
    );
}

export default ActionBtn;