# FairQuote

FairQuote is a simple, beginner-friendly website for freelancers who want to estimate a project price before sending a quote to a client. It works as a static webpage, so it can be published on GitHub Pages without a backend or any paid service.

## Features

- Enter estimated work hours, hourly rate, and project expenses
- Calculate the estimate with the formula: (hours × hourly rate) + expenses
- Validate input with clear, beginner-friendly error messages
- Choose a currency for display
- Show the final price in a clean, readable format
- Include a reminder that the estimate is a planning aid, not a guarantee of what a client will pay
- Mobile-friendly layout with accessible labels and keyboard-friendly controls

## Local setup

1. Download or clone this repository.
2. Open the project folder in your editor.
3. Start a local web server in the project root, for example:

```bash
python3 -m http.server 8000
```

4. Open http://localhost:8000 in your browser.

You can also open `index.html` directly in a browser, but using a local server is usually easier and more reliable.

## GitHub Pages publishing steps

1. Push this project to a GitHub repository.
2. In the repository, open Settings.
3. Select Pages in the left sidebar.
4. Under Source, choose "Deploy from a branch".
5. Pick the `main` branch and the `/ (root)` folder.
6. Save the settings.
7. GitHub Pages will provide a live URL for the project.

## How the JavaScript calculation works

The estimate is calculated with this formula:

`(hours × hourly rate) + expenses`

In the JavaScript file:

- `hours`, `rate`, and `expenses` are read from the form inputs.
- The code checks that the values are valid:
  - hours must be greater than zero
  - rate must be greater than zero
  - expenses must be zero or more
- If any value is invalid, the page shows a clear error message.
- If the values are valid, the script calculates the total and formats it as a currency value using the selected currency.

## How to test it

- Open the page in a browser.
- Try these examples:
  - Valid: hours = 20, rate = 60, expenses = 150
  - Invalid: hours = 0
  - Invalid: rate = -10
  - Invalid: expenses = -5
- Click "Calculate estimate" and check that the result appears correctly.
- Confirm the error messages are clear and that the result updates with the selected currency.

This project is open source and designed to be easy to understand for beginners.
