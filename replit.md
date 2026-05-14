# Timestamp Microservice

## Overview
This is a FreeCodeCamp boilerplate project for the Timestamp Microservice API challenge. The application provides a simple REST API that converts dates to Unix timestamps and UTC strings.

**Current State**: Successfully imported and configured to run on Replit
**Last Updated**: October 5, 2025

## Project Architecture

### Tech Stack
- **Backend Framework**: Express.js (v4.12.4)
- **Node.js**: Server-side JavaScript runtime
- **CORS**: Enabled for cross-origin API testing

### Project Structure
```
.
├── index.js              # Main server file with Express app and routes
├── package.json          # Project dependencies and scripts
├── views/
│   └── index.html       # Frontend UI with API documentation
├── public/
│   └── style.css        # Styling for the frontend
├── sample.env           # Environment variable template
└── README.md            # Project documentation
```

### Key Components
1. **Express Server** (`index.js`)
   - Binds to `0.0.0.0:5000` for Replit environment
   - Serves static files from `/public`
   - Serves HTML views from `/views`
   - CORS enabled for FreeCodeCamp testing

2. **API Endpoints**
   - `GET /` - Serves the main HTML interface
   - `GET /api/hello` - Test endpoint returning JSON greeting
   - Future: `/api/:date` - Timestamp conversion endpoint (to be implemented)

3. **Frontend Interface**
   - Single-page application showing usage examples
   - Links to API endpoints for testing
   - Styled with custom CSS

## Recent Changes
- **October 5, 2025**: Initial import and Replit configuration
  - Updated server to bind to `0.0.0.0:5000` instead of `localhost:3000`
  - Configured workflow to run `npm start` on port 5000
  - Set up deployment configuration for autoscale
  - Installed all npm dependencies (express, cors)

## Replit Configuration

### Workflow
- **Name**: Server
- **Command**: `npm start`
- **Port**: 5000
- **Output Type**: Webview

### Deployment
- **Type**: Autoscale (stateless API service)
- **Run Command**: `npm start`

### Environment Variables
- `PORT`: Server port (defaults to 5000)

## Development Notes
- The server automatically uses port 5000 in the Replit environment
- CORS is enabled to allow FreeCodeCamp's remote testing
- The API implementation is a boilerplate and needs the timestamp conversion logic added
- No database required - this is a stateless API service

## Next Steps for Users
The boilerplate is ready to use. To complete the FreeCodeCamp challenge:
1. Implement the `/api/:date` endpoint to handle timestamp conversion
2. Accept both Unix timestamps (milliseconds) and date strings
3. Return JSON with both `unix` and `utc` formats
4. Handle invalid dates appropriately

## User Preferences
No specific user preferences recorded yet.
