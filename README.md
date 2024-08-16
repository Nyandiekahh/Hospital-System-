# Hospital Management System

## Overview

This Hospital Management System is a web application designed to streamline the management of patient records, appointments, and health information for patients, medical practitioners, and administrators. The application provides role-based access to various functionalities, ensuring that each user type (Admin, Medical Practitioner, and Patient) has access to the appropriate features.

## Features

### Admin
- Dashboard
- Health News
- FAQs
- Support/Help
- Profile Settings
- User Management
- Role Management
- Appointment Management
- Doctor Availability
- Reports and Analytics
- System Settings
- Audit Logs
- Billing and Invoicing
- Health Resources Management
- Feedback and Surveys

### Medical Practitioner
- Dashboard
- Health News
- FAQs
- Support/Help
- Profile Settings
- Patient Search
- Patient Records
- Appointments
- Availability Calendar
- Test Results
- Medication Prescriptions
- Reports
- Collaboration
- Notifications
- Feedback

### Patient
- Dashboard
- Health News
- FAQs
- Support/Help
- Profile Settings
- Medical History
- Appointments
- Doctor's Availability
- Test Results
- Prescriptions
- Notifications
- Feedback

## Getting Started

### Prerequisites
- Node.js (v16.x.x or later)
- npm (v8.x.x or later)

### Installation

1. Clone the repository
2. Install the dependencies by running ```npm install```
3. Start the development server by running ```npm start```
4. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
hospital-management-system
├── public
│   └── index.html
├── src
│   ├── components
│   ├── context
│   ├── pages
│   ├── styles
│   ├── App.js
│   ├── index.js
│   └── mockData.js
├── .gitignore
├── package.json
└── README.md
```

## Authentication

Authentication is managed using a context (`AuthContext`) which provides the login and logout methods, as well as the current user state.

## Routing

The application uses `react-router-dom` for routing. The main routes are defined in `App.js`.

## Contribution

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
