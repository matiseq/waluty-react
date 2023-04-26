import React from 'react';
import Select from '../Select/Select';

function CurrencyOptionsSelector({ onCurrencyChange }) {
  const availableCurrencies = [
    { value: 'EUR', label: 'Euro' },
    { value: 'USD', label: 'Dolar amerykański' },
    { value: 'CHF', label: 'Frank szwajcarski' },
  ];

  return (
    <Select
      id="currencies-selector"
      items={availableCurrencies}
      onChangeValue={onCurrencyChange}
    />
  );
}

export default CurrencyOptionsSelector;
