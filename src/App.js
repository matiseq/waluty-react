import React, { useState } from 'react';
import './App.css';
import { updateExchangeRate } from './api';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Logo from './components/Logo/Logo';
import CurrencyOptionsSelector from './components/CurrencyOptionsSelector/CurrencyOptionSelector';

function App() {
  const [currency, setCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');

  const handleConvert = (event) => {
    event.preventDefault();
    if (isNaN(amount) || amount <= 0) {
      alert('Wprowadź poprawną wartość.');
      return;
    }
    updateExchangeRate(currency).then((rate) => {
      const convertedAmount = amount * rate;
      setResult(`${amount} ${currency} = ${convertedAmount.toFixed(2)} PLN`);
    });
  };

  return (
    <div className="App">
      <Logo />
      <h1>Kalkulator walut</h1>
      <form className="form" onSubmit={handleConvert}>
        <div className="input-container">
          <label htmlFor="currency">Wybierz walutę:</label>
          <CurrencyOptionsSelector onCurrencyChange={setCurrency} />
        </div>
        <div className="input-container">
          <label htmlFor="amount">Podaj kwotę:</label>
          <Input id="amount" value={amount} onChangeValue={setAmount} />
        </div>
        <Button id="convert" type="submit" disabled={!amount || amount <= 0}>
          Przelicz
        </Button>
      </form>
      <div className="result">{result}</div>
    </div>
  );
}

export default App;
