# SIH Backend Project

## Overview

This project is a backend application for the Smart India Hackathon (SIH) initiative. It uses Flask for the backend API and Vite for building the React frontend. The application includes user authentication and other functionalities.

## Installation

### Backend (Flask)

1. **Set up Python Environment**
   - Make sure you have Python installed. 
   - Create a virtual environment:
     ```bash
     python -m venv venv
     ```
   - Activate the virtual environment:
     - **Windows:**
       ```bash
       venv\Scripts\activate
       ```
     - **macOS/Linux:**
       ```bash
       source venv/bin/activate
       ```

2. **Install Python Dependencies**
   ```bash
   pip install -r requirements.txt
   ```

3. **Set Up the Database**
   - Ensure PostgreSQL is running and create a database.
   - Update the `SQLALCHEMY_DATABASE_URI` in `app.py` with your database credentials.
   - Initialize the database:
     ```bash
     python app.py
     ```

### Frontend (React with Vite)

1. **Navigate to the `src` Directory**
   ```bash
   cd src
   ```

2. **Install Node.js Dependencies**
   ```bash
   npm install
   ```

3. **Build the Frontend**
   ```bash
   npm run build
   ```

   This will generate production-ready files in the `static` directory.

## Running the Application

1. **Start the Flask Backend**
   ```bash
   flask run
   ```

   The backend will be available at `http://127.0.0.1:5000`.

2. **Serve the React Frontend**
   Ensure the `static` directory is correctly linked to your Flask application.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or feedback, please contact [your-email@example.com](mailto:your-email@example.com).
```
You can adjust the contact information and other details as needed.
```

## Project Structure

```plaintext
sih/
├── static/                        # Contains built React frontend files after Vite build
│   ├── assets/                    # Built assets (images, etc.) after Vite build
│   │   ├── logo-CSZF0ANS.png
│   │   ├── modiji-DPZZFTkN.jpeg
│   │   └── index-BIyMX6f-.css     # Built CSS file by Vite
│   ├── index.html                 # The main HTML file for the built React app
│   ├── index-U9uxCBIw.js          # Built JavaScript file by Vite
│   └── vite.svg
│
├── templates/                     # (Optional) Flask's template directory for Jinja2 templates
│   └── [any Jinja2 templates if used, otherwise this directory can be omitted]
│
├── venv/                          # Virtual environment for Python
│   └── [Python virtual environment files]
│
├── app.py                         # Flask application file
│
├── requirements.txt               # Python dependencies
│
├── package.json                   # Node.js dependencies and project scripts for React frontend
│
├── vite.config.js                 # Vite configuration file for building React app
│
├── src/                           # React source files (used during development)
│   ├── assets/                    # Source assets (images, etc.) for React app
│   │   ├── logo.png
│   │   ├── budget-banner.png
│   │   └── modiji.png
│   ├── components/                # React components
│   │   ├── About.jsx
│   │   ├── Banner.jsx
│   │   ├── AdministratorLogin.jsx
│   │   ├── EmployeeLogin.jsx
│   │   ├── Footer.jsx
│   │   ├── FooterTop.jsx
│   │   ├── Header.jsx
│   │   ├── LoginCard.jsx
│   │   ├── PublicLogin.jsx
│   │   ├── SignupPage.jsx
│   │   └── TopHead.jsx
│   ├── styles/                    # CSS styles for the React components
│   │   ├── About.css
│   │   ├── Banner.css
│   │   ├── Footer.css
│   │   ├── FooterTop.css
│   │   ├── Header.css
│   │   ├── LoginCard.css
│   │   ├── SignupPage.css
│   │   └── TopHead.css
│   ├── App.jsx                    # Main React component
│   ├── main.jsx                   # Entry point for React app
│   └── index.html                 # HTML file for development (not used in production)
│
└── README.md                      # Project documentation