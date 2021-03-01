import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ActionBtn from './components/ActionBtn/ActionBtn';
import CurrencyBtn from './components/CurrencyBtn/CurrencyBtn';
import NumberBtn from './components/NumberBtn/NumberBtn';
import RightBlock from './components/RightBlock/RightBlock';
import CashModal from './components/CashModal/CashModal';

function App() {

  const [selectedNumbers, SetSelectedNumbers] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCashModal, setShowCashModal] = useState(false);

  const onNumberClick = (number) => {
    let numbers = selectedNumbers;
    if (numbers.includes(number)) {
      numbers = numbers.filter((n) => n !== number);
    } else {
      if (numbers.length < 5) {
        numbers.push(number);
      }
    }
    SetSelectedNumbers([...numbers]);
  }

  const onCurrencyClick = (value) => {
    setTotal(total + value);
  }

  const onClearClick = () => {
    SetSelectedNumbers([]);
    setTotal(0);
  }

  const toggleCashModal = () => {
    setShowCashModal(!showCashModal);
  }

  return (
    <div className="App">
      <div className="container">
        <header className='text-center mb-4'>
          <h1 className='title'>WHE WHE on D' Avenue</h1>
        </header>
        <div className='row'>
          <div className='col-3'>
            <div className='d-flex flex-wrap'>
              {
                [1, 5, 10, 20].map((value) => {
                  return (<CurrencyBtn value={value} disabled={selectedNumbers?.length < 5} onCurrencyClick={() => onCurrencyClick(value)} />);
                })
              }
            </div>
          </div>
          <div className='col-6'>
            <div className='d-flex flex-wrap'>
              {
                Array.from(Array(20).keys()).map(value => value + 1).map((value) => (
                  <NumberBtn value={value} selected={selectedNumbers?.includes(value)} onNumberClick={onNumberClick} />
                ))
              }
              <ActionBtn text={'CASH'} disabled={selectedNumbers?.length < 5} onActionClick={() => setShowCashModal(true)} />
              <ActionBtn text={'CLEAR'} onActionClick={() => onClearClick()} />
            </div>
          </div>
          <div className='col-3'>
            <RightBlock selectedNumbers={selectedNumbers} total={total} />
          </div>
        </div>
        <CashModal show={showCashModal} toggle={() => toggleCashModal()} total={total} />
      </div>
    </div>
  );
}

export default App;
