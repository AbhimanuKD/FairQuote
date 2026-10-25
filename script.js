// This script validates the form inputs and calculates a quote using:
// (hours × hourly rate) + expenses.

const form = document.getElementById('estimate-form');
const hoursInput = document.getElementById('hours');
const rateInput = document.getElementById('rate');
const expensesInput = document.getElementById('expenses');
const currencySelect = document.getElementById('currency');
const errorMessage = document.getElementById('error-message');
const resultSection = document.getElementById('result');
const totalAmount = document.getElementById('total-amount');
const formulaText = document.getElementById('formula');

function clearErrors() {
  errorMessage.textContent = '';
  [hoursInput, rateInput, expensesInput].forEach((input) => {
    input.classList.remove('invalid');
    input.setAttribute('aria-invalid', 'false');
  });
}

function showError(message, input) {
  errorMessage.textContent = message;
  if (input) {
    input.classList.add('invalid');
    input.setAttribute('aria-invalid', 'true');
  }
}

function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function calculateEstimate(event) {
  event.preventDefault();
  clearErrors();

  const hours = Number.parseFloat(hoursInput.value);
  const rate = Number.parseFloat(rateInput.value);
  const expenses = Number.parseFloat(expensesInput.value);
  const currencyCode = currencySelect.value;

  if (hoursInput.value.trim() === '') {
    showError('Please enter the estimated work hours.', hoursInput);
    return;
  }

  if (rateInput.value.trim() === '') {
    showError('Please enter your hourly rate.', rateInput);
    return;
  }

  if (expensesInput.value.trim() === '') {
    showError('Please enter project expenses. If there are none, enter 0.', expensesInput);
    return;
  }

  if (!Number.isFinite(hours) || hours <= 0) {
    showError('Hours must be greater than zero. Try 5, 12, or 40.', hoursInput);
    return;
  }

  if (!Number.isFinite(rate) || rate <= 0) {
    showError('Hourly rate must be greater than zero. Try 25 or 75.', rateInput);
    return;
  }

  if (!Number.isFinite(expenses) || expenses < 0) {
    showError('Expenses must be zero or more. Use 0 for no extra costs.', expensesInput);
    return;
  }

  const subtotal = hours * rate;
  const total = subtotal + expenses;

  // Show the calculation in a way beginners can read clearly.
  formulaText.textContent = `Calculation: (${hours} × ${formatCurrency(rate, currencyCode)}) + ${formatCurrency(expenses, currencyCode)} = ${formatCurrency(total, currencyCode)}`;
  totalAmount.textContent = formatCurrency(total, currencyCode);
  resultSection.hidden = false;
}

form.addEventListener('submit', calculateEstimate);
