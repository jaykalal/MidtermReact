import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './CashModal.css';

function CashModal({ show, toggle, total }) {

  const [received, setReceived] = useState(0);

  const onInputChange = (e) => {
    let value = e.target.value;
    if (value && !isNaN(value)) {
      value = +value;
    } else {
      value = 0;
    }
    setReceived(value);
  }

  return (
    <Modal show={show} className='cash-modal'>
      <Modal.Header>
        <span>CASH</span>
        <span className='cursor-pointer' onClick={toggle}>x</span>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Enter Amount Received</h4>
          <table>
            <tr>
              <td>Total:</td>
              <td>${total}</td>
            </tr>
            <tr>
              <td>Received:</td>
              <td>
                <input type='number' name='received' value={received} onChange={onInputChange} />
              </td>
            </tr>
            <tr>
              <td>Change:</td>
              <td>
                <input type='number' name='received' value={received - total} readOnly />
              </td>
            </tr>
          </table>
          <div className='my-3'>
            <button className='modal-btn mr-2' onClick={toggle}>Confirm</button>
            <button className='modal-btn' onClick={toggle}>Close</button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CashModal;