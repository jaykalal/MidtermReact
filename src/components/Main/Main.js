import React, { useState } from 'react';

function Main(props) {

    const [selectedNumbers, SetSelectedNumbers] = useState([]);

    const onNumberClick = (number) => {
        let numbers = selectedNumbers;
        if (numbers.includes(number)) {
            numbers = numbers.filter((n) => n !== number);
        } else {
            numbers.push(number);
        }
        SetSelectedNumbers([...numbers]);
    }

    return (
        <div className='row'>
            <div className='col-3'>
                {selectedNumbers}
            </div>
            <div className='col-6'>
                <div className='d-flex flex-wrap'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                            <div key={value} className={`number-btn ${selectedNumbers?.includes(value) ? ' selected ' : ''}`} onClick={() => onNumberClick(value)}>{value}</div>
                        ))
                    }
                </div>
            </div>
            <div className='col-3'></div>
        </div>
    );
}

export default Main;