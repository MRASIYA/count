# Google Sheets Item Issues Web App - Deployment Instructions

## Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click "Blank" to create a new spreadsheet
3. Rename it to "Item Issues Tracker"
4. **Copy the Spreadsheet ID from the URL**
   - URL looks like: `1EP0HuQ_XzhLPCnMjUwiRxQo2m5AM7tYUTyKRUHAYLzE`
   - Copy the part between `/d/` and `/edit`
5. Save this ID - you'll need it in Step 3

## Step 2: Set Up Google Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. You'll see a new Apps Script project with `Code.gs` file
3. Delete the default code in `Code.gs`

## Step 3: Add the Code Files

### 3.1 Main Code (Code.gs)
1. In the Apps Script editor, paste the content from your local `Code.gs` file
2. **IMPORTANT**: Replace `'1EP0HuQ_XzhLPCnMjUwiRxQo2m5AM7tYUTyKRUHAYLzE'` with your actual spreadsheet ID from Step 1
3. Save the file (Ctrl+S)

### 3.2 HTML Interface (Index.html)
1. Click the "+" button next to "Files"
2. Choose "HTML" file
3. Name it `Index`
4. Delete the default content
5. Paste the content from your local `Index.html` file
6. Save the file

### 3.3 Styles (Styles.html)
1. Click the "+" button next to "Files"
2. Choose "HTML" file  
3. Name it `Styles`
4. Delete the default content
5. Paste the content from your local `Styles.html` file
6. Save the file

## Step 4: Initialize the Sheet

1. In the Apps Script editor, make sure you're in the `Code.gs` file
2. Click on the function dropdown (should show "doGet")
3. Select `initializeSheet` from the dropdown
4. Click the "Run" button (▶️)
5. **First time only**: You'll need to authorize the script
   - Click "Review permissions"
   - Choose your Google account
   - Click "Advanced" → "Go to your project name (unsafe)"
   - Click "Allow"
6. Check your Google Sheet - it should now have headers in the first row

## Step 5: Deploy as Web App

1. In Apps Script, click **Deploy → New Deployment**
2. Click the gear icon next to "Type" and select **Web app**
3. Fill in the deployment details:
   - **Description**: "Item Issues Tracker v1"
   - **Execute as**: Me
   - **Who has access**: Anyone (or "Anyone with the link" for more security)
4. Click **Deploy**
5. **Copy the Web App URL** - this is your live web app link!
6. Click **Done**

## Step 6: Test Your Web App

1. Open the Web App URL in a new browser tab
2. You should see the "Item Issues Tracking System" with two tabs:
   - **Add Issue**: Form to submit new issues
   - **Dashboard**: View and manage existing issues
3. Test adding a new issue:
   - Fill out the form
   - Click "Submit Issue"
   - Check your Google Sheet to confirm the data was added
4. Test the dashboard:
   - Click the "Dashboard" tab
   - Click "Refresh" to load issues
   - Try changing status or deleting an issue

## Step 7: Share and Use

- **Share the Web App URL** with your team
- **Bookmark the URL** for easy access
- **Share the Google Sheet** with people who need direct access to data

## Troubleshooting

### Common Issues:

1. **"Script function not found" error**:
   - Make sure all three files are created and saved in Apps Script
   - Check that function names match exactly

2. **Permission errors**:
   - Re-run the authorization process in Apps Script
   - Make sure you selected "Anyone" for web app access

3. **Data not appearing**:
   - Check that you replaced `[1EP0HuQ_XzhLPCnMjUwiRxQo2m5AM7tYUTyKRUHAYLzE](https://script.google.com/macros/s/AKfycbwdaCtwqn0lmlyw68cD6CAy18RkZx01tAnqPa2kHgcyQA_-uh6tr49ixDhVPR38wDTQGg/exec)` with your actual ID
   - Verify the sheet has the correct headers

4. **Web app not loading**:
   - Make sure you deployed as "Web app" type
   - Check that all HTML files are saved

### Making Updates:

1. Edit your code in Apps Script
2. Save all files
3. Go to **Deploy → Manage Deployments**
4. Click the edit icon (pencil) next to your deployment
5. Change the version to "New Version"
6. Click **Deploy**
7. The web app URL remains the same, but will use the updated code

## Security Notes

- **Anyone access**: Anyone with the URL can use the web app
- **Anyone with link**: Only people you share the URL with can access
- **Restricted**: Only people in your Google Workspace domain

Choose the appropriate access level for your needs!
