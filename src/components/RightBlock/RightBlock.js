import React from 'react';

function RightBlock({ selectedNumbers, total }) {
    return (
        <div className='right-block'>
            <div className='d-flex flex-column'>
                <h4>Numbers selected:</h4>
                {
                    selectedNumbers.map((value) => {
                        return (
                            <div>Mark: {value}</div>
                        )
                    })
                }
                <div className='my-2'></div>
                <div>Total: ${total}</div>
            </div>
        </div>
    );
}

export default RightBlock;