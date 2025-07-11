const currencyList = [
  { code: "USD", name: "US Dollar", rate: 1 },
  { code: "EUR", name: "Euro", rate: 0.92 },
  { code: "INR", name: "Indian Rupee", rate: 83 },
  { code: "GBP", name: "British Pound", rate: 0.78 },
  { code: "JPY", name: "Japanese Yen", rate: 157 },
  { code: "CAD", name: "Canadian Dollar", rate: 1.35 },
  { code: "AUD", name: "Australian Dollar", rate: 1.5 },
  { code: "CNY", name: "Chinese Yuan", rate: 7.2 }
];

// Populate dropdowns
const fromSelect = document.getElementById('fromCurrency');
const toSelect = document.getElementById('toCurrency');

currencyList.forEach(currency => {
  const option1 = document.createElement('option');
  option1.value = currency.code;
  option1.text = `${currency.code} - ${currency.name}`;
  fromSelect.appendChild(option1);

  const option2 = document.createElement('option');
  option2.value = currency.code;
  option2.text = `${currency.code} - ${currency.name}`;
  toSelect.appendChild(option2);
});

// Conversion function
function convertCurrency() {
  const amountInput = document.getElementById('amount');
  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;
  const resultDiv = document.getElementById('result');

  const amount = parseFloat(amountInput.value);

  if (isNaN(amount)) {
    resultDiv.innerText = "⚠️ Please enter a valid amount.";
    return;
  }

  if (fromCurrency === toCurrency) {
    resultDiv.innerText = "⚠️ Please select different currencies.";
    return;
  }

  const fromRate = currencyList.find(c => c.code === fromCurrency).rate;
  const toRate = currencyList.find(c => c.code === toCurrency).rate;

  const convertedAmount = (amount / fromRate) * toRate;

  const now = new Date();
  const timestamp = now.toLocaleString();

  resultDiv.innerText = 
    `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}\n\nConverted on ${timestamp}`;
}
