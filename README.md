# Item Issues Web App

A Google Sheets-based web application for tracking and managing item issues with a user-friendly interface.

## Features

✅ **Add New Issues**: Submit detailed issue reports with priority levels  
✅ **Dashboard View**: See all issues in a table format  
✅ **Status Management**: Update issue status (Open, In Progress, Resolved, Closed)  
✅ **Priority Tracking**: Categorize issues by Low, Medium, High priority  
✅ **Assignment**: Assign issues to team members  
✅ **Real-time Updates**: Changes sync directly to Google Sheets  
✅ **Mobile Responsive**: Works on desktop and mobile devices  
✅ **No Database Needed**: Uses Google Sheets as the backend  

## What You'll Get

### 1. Web Interface
- Clean, professional-looking web app
- Two main tabs: "Add Issue" and "Dashboard"
- Form validation and error handling
- Responsive design for all devices

### 2. Issue Tracking Fields
- **ID**: Auto-generated unique identifier
- **Item Name**: Name of the item with issues
- **Issue Description**: Detailed problem description
- **Priority**: Low, Medium, High
- **Status**: Open, In Progress, Resolved, Closed
- **Reporter Name**: Who reported the issue
- **Assigned To**: Who's responsible for fixing it
- **Reported Date**: Automatically timestamp
- **Resolution Date**: Auto-filled when resolved
- **Notes**: Additional information

### 3. Dashboard Features
- View all issues in a sortable table
- Quick status updates via dropdown
- Delete issues with confirmation
- Refresh button to reload data
- Color-coded priority and status indicators

## Files Included

1. **Code.gs** - Main Google Apps Script backend code
2. **Index.html** - Web interface with forms and dashboard
3. **Styles.html** - CSS styling for professional appearance
4. **DEPLOYMENT_INSTRUCTIONS.md** - Step-by-step setup guide
5. **README.md** - This file

## Quick Start

1. **Follow the deployment instructions** in `DEPLOYMENT_INSTRUCTIONS.md`
2. **Create your Google Sheet** and get the spreadsheet ID
3. **Set up Google Apps Script** with the provided code files
4. **Deploy as web app** and get your unique URL
5. **Start tracking issues!**

## Usage Examples

### Adding an Issue
1. Open the web app
2. Fill in the "Add Issue" form:
   - Item Name: "Laptop #123"
   - Description: "Screen flickering intermittently"
   - Priority: "High"
   - Reporter: "John Doe"
   - Assigned To: "IT Support"
3. Click "Submit Issue"
4. Issue is immediately saved to Google Sheets

### Managing Issues
1. Click the "Dashboard" tab
2. Click "Refresh" to load all issues
3. Use the dropdown to change status
4. Click "Delete" to remove completed issues
5. View full descriptions by hovering over truncated text

## Benefits

- **No Installation**: Runs in any web browser
- **Free to Use**: Uses free Google services
- **Team Collaboration**: Multiple people can submit and track issues
- **Data Backup**: Google Sheets automatically saves and backs up data
- **Export Options**: Export data from Google Sheets to Excel, CSV, etc.
- **Customizable**: Easy to modify fields and styling
- **Secure**: Uses Google's authentication and security

## Who Can Use This

- **Small Businesses**: Track equipment, inventory, or service issues
- **IT Departments**: Log and manage technical problems
- **Facilities Management**: Report and track building/maintenance issues
- **Project Teams**: Track project-related problems and blockers
- **Schools**: Report and manage classroom or equipment issues
- **Anyone**: Who needs a simple, effective issue tracking system

## Support

If you encounter any issues during setup:

1. Check the troubleshooting section in `DEPLOYMENT_INSTRUCTIONS.md`
2. Verify all files are properly copied and saved
3. Ensure the spreadsheet ID is correctly updated
4. Make sure all permissions are properly authorized

## Next Steps

After deployment, you can:
- Customize the fields to match your needs
- Add more status options or priority levels
- Modify the styling and colors
- Add email notifications (advanced)
- Create reports and charts in Google Sheets
- Set up automatic backups

Enjoy your new issue tracking system!
