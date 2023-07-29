# Custom New Tab URL Chrome Extension

This Chrome extension allows you to customize the new tab URL to your desired website. The extension is built using Next.js

## Features
- Set a custom URL for the new tab page.
- Automatically update the new tab URL based on your preference.
- View the current setting of the new tab URL.

## Getting Started
Follow the steps below to set up and use the extension:

1. Install Dependencies:
```bash
npm install
```

2. Build the Extension:
```bash
npm run build:extension
``` 

3. Install the Extension in Chrome:
- Open Chrome and go to the Extensions page (`chrome://extensions/`).
- Enable Developer mode by toggling the switch in the top right corner.
- Click on "Load unpacked" and select the `out` directory that was created after running the build command.

4. Set your Custom URL:
- Click on the extension icon in your Chrome browser to open the popup window.
- Enter your desired URL in the input field labeled "Insert URL."
- Click the "save" button to save the custom URL.

5. Enjoy your Custom New Tab Page:
- Now, whenever you open a new tab, it will load the URL you specified.

## How it Works
The extension consists of two main files:

### `background.js`
This script runs in the background and handles the functionality of setting and updating the custom new tab URL.

### `extension.tsx`
This TypeScript file contains the user interface for the extension. It allows users to enter their desired URL for the new tab page and save the setting.

## Disclaimer
Please note that this extension assumes some basic familiarity with Chrome extension development and Next.js. If you are new to these technologies, consider referring to their official documentation for more detailed information.

**Important:** Make sure to review the code and verify its safety before installing any extension from unofficial sources.
