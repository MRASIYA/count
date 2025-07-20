# DailyStock Project

## Overview
The DailyStock project is a web application that allows users to submit stock data to a Google Sheet. It features a simple frontend form for data entry and a backend powered by Google Apps Script to handle submissions.

## Project Structure
```
DailyStock
├── stockApp.gs        # Google Apps Script backend logic
├── index.html         # Web app frontend
└── README.md          # Project documentation
```

## Files Description

### stockApp.gs
This file contains the Google Apps Script backend logic. It handles the data submission from the web app to the Google Sheet, processes the input from the user, and automatically adds the current date and time to the entries.

### index.html
This file is the web app frontend. It includes a form with three sections:
- **A Section**: A dropdown for selecting an item.
- **B Section**: An input for quantity.
- **C Section**: A display for the current date and time.

It also includes JavaScript to handle form submission and fetch data from the Google Apps Script URL.

## Setup Instructions
1. Create a new Google Sheet to store the stock data.
2. Open the Google Apps Script editor and create a new project.
3. Copy the contents of `stockApp.gs` into the script editor.
4. Deploy the script as a web app and note the script URL.
5. Create an `index.html` file and copy the frontend code into it.
6. Open the `index.html` file in a web browser to access the web app.

## Usage
- Select an item from the dropdown menu.
- Enter the quantity in the input field.
- Submit the form to send the data to the Google Sheet.
- The current date and time will be automatically added to the entry.

## Contributing
Feel free to fork the repository and submit pull requests for any improvements or bug fixes.
