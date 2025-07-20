// Google Apps Script - Main Code File
// Item Issues Web App

function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Get the spreadsheet
function getSpreadsheet() {
  // Replace with your actual spreadsheet ID after creating the sheet
  const SPREADSHEET_ID = '1EP0HuQ_XzhLPCnMjUwiRxQo2m5AM7tYUTyKRUHAYLzE';
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

// Initialize the spreadsheet with headers
function initializeSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getActiveSheet();
  
  // Set up headers
  const headers = [
    'ID',
    'Item Name',
    'Issue Description',
    'Priority',
    'Status',
    'Reported Date',
    'Reporter Name',
    'Assigned To',
    'Resolution Date',
    'Notes'
  ];
  
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
  
  return 'Sheet initialized successfully!';
}

// Add new issue
function addIssue(formData) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    // Get next ID
    const lastRow = sheet.getLastRow();
    const nextId = lastRow > 1 ? lastRow : 1;
    
    // Prepare data
    const rowData = [
      nextId,
      formData.itemName,
      formData.issueDescription,
      formData.priority,
      formData.status || 'Open',
      new Date(),
      formData.reporterName,
      formData.assignedTo || '',
      '', // Resolution date (empty initially)
      formData.notes || ''
    ];
    
    // Add to sheet
    sheet.appendRow(rowData);
    
    return { success: true, message: 'Issue added successfully!', id: nextId };
  } catch (error) {
    return { success: false, message: 'Error: ' + error.toString() };
  }
}

// Get all issues
function getAllIssues() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    const lastRow = sheet.getLastRow();
    if (lastRow <= 1) return [];
    
    const data = sheet.getRange(2, 1, lastRow - 1, 10).getValues();
    
    return data.map(row => ({
      id: row[0],
      itemName: row[1],
      issueDescription: row[2],
      priority: row[3],
      status: row[4],
      reportedDate: row[5],
      reporterName: row[6],
      assignedTo: row[7],
      resolutionDate: row[8],
      notes: row[9]
    }));
  } catch (error) {
    return [];
  }
}

// Update issue status
function updateIssueStatus(id, newStatus) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    const data = sheet.getDataRange().getValues();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] == id) {
        sheet.getRange(i + 1, 5).setValue(newStatus);
        
        // If status is resolved/closed, add resolution date
        if (newStatus.toLowerCase() === 'resolved' || newStatus.toLowerCase() === 'closed') {
          sheet.getRange(i + 1, 9).setValue(new Date());
        }
        
        return { success: true, message: 'Status updated successfully!' };
      }
    }
    
    return { success: false, message: 'Issue not found!' };
  } catch (error) {
    return { success: false, message: 'Error: ' + error.toString() };
  }
}

// Delete issue
function deleteIssue(id) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();
    
    const data = sheet.getDataRange().getValues();
    
    for (let i = 1; i < data.length; i++) {
      if (data[i][0] == id) {
        sheet.deleteRow(i + 1);
        return { success: true, message: 'Issue deleted successfully!' };
      }
    }
    
    return { success: false, message: 'Issue not found!' };
  } catch (error) {
    return { success: false, message: 'Error: ' + error.toString() };
  }
}
