function doGet(e) {
  var item = e.parameter.item;
  var quantity = e.parameter.quantity;
  var sheet = SpreadsheetApp.openById('AKfycbyBbTkgNQHIXYRMtswOMOBZZ1vc0gWq-q6f34cxYUjWoCTaON_7P-mim8Dhnh5ImsHvPw').getActiveSheet(); // <-- Replace with your real ID
  var dateTime = new Date();
  sheet.appendRow([item, quantity, dateTime]);
  return ContentService.createTextOutput('Success');
}
