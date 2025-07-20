function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function submitData(item, quantity) {
  var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getActiveSheet();
  var dateTime = new Date();
  
  sheet.appendRow([item, quantity, dateTime]);
  
  return { status: 'success', message: 'Data submitted successfully!' };
}
