import React from 'react';

function NumberBtn({ value, selected, onNumberClick }) {
    return (
        <div className={`number-btn ${selected ? ' selected ' : ''}`} onClick={() => onNumberClick(value)}>{value}</div>
    );
}

export default NumberBtn;