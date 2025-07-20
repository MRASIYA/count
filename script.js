// Your Google Sheets configuration
const SPREADSHEET_ID = '1EP0HuQ_XzhLPCnMjUwiRxQo2m5AM7tYUTyKRUHAYLzE';
const SHEET_NAME = 'Sheet1';
const RANGE = 'A:F';

// Google API configuration with your credentials
const API_KEY = 'AIzaSyDSVDJCCHXfX-UftBq7hLDU1UfsWADRiX0';
const CLIENT_ID = '222243682203-1p86aa7tv87ms59ekps883h8qhcd4h1n.apps.googleusercontent.com';
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

let tokenClient;
let gapi_inited = false;
let gis_inited = false;

// Initialize Google API
function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapi_inited = true;
    maybeEnableButtons();
}

function gisLoaded() {
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '',
    });
    gis_inited = true;
    maybeEnableButtons();
}

function maybeEnableButtons() {
    if (gapi_inited && gis_inited) {
        document.getElementById('authorize-button').style.display = 'block';
    }
}

// Handle authorization
function handleAuthClick() {
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }
        document.getElementById('signout-button').style.display = 'block';
        document.getElementById('authorize-button').style.display = 'none';
        document.getElementById('submit-btn').disabled = false;
        document.getElementById('auth-status').textContent = 'Connected to Google Sheets ✓';
        document.getElementById('auth-status').style.color = 'green';
    };

    if (gapi.client.getToken() === null) {
        tokenClient.requestAccessToken({prompt: 'consent'});
    } else {
        tokenClient.requestAccessToken({prompt: ''});
    }
}

function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
        google.accounts.oauth2.revoke(token.access_token);
        gapi.client.setToken('');
        document.getElementById('signout-button').style.display = 'none';
        document.getElementById('authorize-button').style.display = 'block';
        document.getElementById('submit-btn').disabled = true;
        document.getElementById('auth-status').textContent = 'Click "Connect to Google Sheets" to start';
        document.getElementById('auth-status').style.color = '';
    }
}

// Submit data to Google Sheets
async function submitToSheets(formData) {
    const values = [
        [
            new Date().toISOString(), // Timestamp
            formData.name,
            formData.email,
            formData.phone || '',
            formData.company || '',
            formData.message || ''
        ]
    ];

    const body = {
        values: values
    };

    try {
        const response = await gapi.client.sheets.spreadsheets.values.append({
            spreadsheetId: SPREADSHEET_ID,
            range: `${SHEET_NAME}!${RANGE}`,
            valueInputOption: 'USER_ENTERED',
            resource: body,
        });

        return response.result;
    } catch (err) {
        throw new Error(`Error: ${err.result.error.message}`);
    }
}

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('data-entry-form');
    const statusDiv = document.getElementById('status');
    const successDiv = document.getElementById('success-message');
    const submissionsList = document.getElementById('submissions-list');

    // Set today's date as default
    document.getElementById('date').value = new Date().toISOString().split('T')[0];

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value,
            date: document.getElementById('date').value
        };

        // Show loading status
        statusDiv.textContent = 'Submitting...';
        statusDiv.className = 'status loading';
        successDiv.style.display = 'none';

        try {
            await submitToSheets(formData);
            
            // Success
            statusDiv.textContent = '';
            statusDiv.className = 'status';
            successDiv.style.display = 'block';
            
            // Add to recent submissions
            addToRecentSubmissions(formData);
            
            // Clear form
            form.reset();
            document.getElementById('date').value = new Date().toISOString().split('T')[0];
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                successDiv.style.display = 'none';
            }, 3000);

        } catch (error) {
            statusDiv.textContent = `Error: ${error.message}`;
            statusDiv.className = 'status error';
            successDiv.style.display = 'none';
        }
    });

    // Event listeners for auth buttons
    document.getElementById('authorize-button').addEventListener('click', handleAuthClick);
    document.getElementById('signout-button').addEventListener('click', handleSignoutClick);

    // Initialize Google APIs
    gapiLoaded();
    gisLoaded();
});

// Add to recent submissions display
function addToRecentSubmissions(data) {
    const submissionsList = document.getElementById('submissions-list');
    const submission = document.createElement('div');
    submission.className = 'submission-item';
    submission.innerHTML = `
        <p><strong>${data.name}</strong> - ${data.email}</p>
        <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
    `;
    submissionsList.insertBefore(submission, submissionsList.firstChild);
    
    // Keep only last 5 submissions
    while (submissionsList.children.length > 5) {
        submissionsList.removeChild(submissionsList.lastChild);
    }
}