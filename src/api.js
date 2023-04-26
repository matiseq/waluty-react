export function updateExchangeRate(currency) {
  const url = `https://api.nbp.pl/api/exchangerates/rates/A/${currency}/?format=json`;

  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data?.rates?.length > 0) {
        return data.rates[0].mid;
      } else {
        throw new Error('Brak danych dotyczących kursów wymiany walut');
      }
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}
