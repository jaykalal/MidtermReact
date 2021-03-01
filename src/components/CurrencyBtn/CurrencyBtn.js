import React, { useState } from 'react';

function CurrencyBtn({ value, disabled, onCurrencyClick }) {

    const [highlight, setHighlight] = useState(false);
    const onBtnClick = (value) => {
        onCurrencyClick(value);
        setHighlight(true);
        setTimeout(() => {
            setHighlight(false);
        }, 200);
    }
    return (
        <div className={`currency-btn ${disabled ? ' disabled ' : ''} ${highlight ? ' highlight ' : ''
            } `} onClick={() => !disabled ? onBtnClick(value) : null}>${value || 0}</div>
    );
}

export default CurrencyBtn;