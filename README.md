# Health Insurance Prediction Web Application

## Project Overview

This project develops a web-based multiple polynomial regression model for predicting health insurance premiums. It provides a user-friendly tool for individuals to estimate their health insurance costs based on various factors, enhancing transparency in the U.S. health insurance system.

### Key Features

- **Multiple Polynomial Regression model** for accurate premium prediction
- **Web-based interface** for easy access and use
- **Data-driven insights** into factors affecting insurance premiums
- **Quick results** with predictions generated within 10 seconds

## Problem Statement

The U.S. health insurance system lacks transparency in premium assessment, making it difficult for individuals to plan their finances effectively. This project addresses the need for an accessible and accurate tool for personal health insurance premium estimation.

## Goals and Objectives

1. Develop a Multiple Polynomial Regression model for health insurance premium prediction.
2. Create a user-friendly web application for easy premium estimation.
3. Deploy the web application to a cloud platform within 3 months.
4. Improve accuracy in pricing within the health insurance industry.

## Technologies Used

- **Data Analysis & Model Development**: Python, Pandas, NumPy, Scikit-learn
- **Data Visualization**: Matplotlib, Seaborn
- **Web Development**: 
  - Frontend: React (JavaScript), Bootstrap
  - Backend: Flask (Python)
- **Version Control & Deployment**: Git, Cloud platform (unspecified)

## Dataset

The project uses the "US Health Insurance Dataset" containing 1,338 records with the following features:
- **Age**: Numeric
- **Sex**: Categorical (female/male)
- **BMI**: Body Mass Index, Numeric
- **Number of Children**: Numeric
- **Smoking Status**: Categorical (yes/no)
- **Region**: Categorical (northeast, southeast, southwest, northwest)
- **Charges**: Insurance premium (numeric target variable)

## Model Performance

Two regression models were developed and compared:

| Evaluation Metric | Linear Regression | Polynomial Regression |
|-------------------|-------------------|-----------------------|
| R-squared         | 0.797             | 0.891                 |
| MAE (10^4) ($)    | 0.360             | 0.208                 |
| MSE (10^8) ($^2)  | 0.273             | 0.142                 |
| RMSE (10^4) ($)   | 0.522             | 0.376                 |

The **Polynomial Regression model** outperformed the Linear Regression model and was chosen for the web application.

## Getting Started

Follow these instructions to set up the project locally for development and testing purposes.

### Prerequisites

- Python 3.7+
- Node.js 12+
- pip (Python package manager)
- npm (Node.js package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/paiizxqh/health-insurance.git
   cd health-insurance
   ```

2. Set up the backend:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```

3. Set up the frontend:
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   python app.py
   ```
   The backend server should now be running on `http://localhost:5000`

2. In a new terminal, start the frontend development server:
   ```bash
   cd frontend
   npm start
   ```
   The frontend development server should now be running on `http://localhost:3000`

3. Open your web browser and navigate to `http://localhost:3000` to use the application.

### Running Tests

- For backend tests:
  ```bash
  cd backend
  python -m unittest discover tests
  ```

- For frontend tests:
  ```bash
  cd frontend
  npm test
  ```

## Usage

1. Access the web application through the provided URL (add URL when available).
2. Input your personal information (age, sex, BMI, number of children, smoking status, and region).
3. Click the submit button to receive your estimated health insurance premium.
4. The result will be displayed within 10 seconds.

## Project Structure

```bash
/health-insurance
│
├── /frontend/                 # React frontend application
│   ├── /node_modules/         # Node.js dependencies for frontend
│   ├── /public/               # Public static files (HTML, icons, etc.)
│   ├── /src/                  # Source files
│   │   ├── /css/              # CSS for styling
│   │   │   └── InsuranceForm.css   # Styles for the InsuranceForm component
│   │   ├── /image/            # Image assets
│   │   │   ├── Logo.png       # Application logo
│   │   │   └── modal.png      # Modal-related image assets
│   │   └── /pages/            # Main application pages
│   │       ├── App.js         # Main application file
│   │       ├── Footer.js      # Footer component
│   │       └── InsuranceForm.js   # Form for insurance input data
│   ├── index.js               # Entry point for React app
│   └── package.json           # Project metadata and dependencies for frontend
│
├── /backend/                  # Flask backend application
│   ├── /venv/                 # Virtual environment for backend Python dependencies
│   ├── app.py                 # Flask main application file (API endpoints)
│   ├── final_poly_model.pkl   # Pretrained machine learning model (prediction model)
│   └── requirements.txt       # Python dependencies for backend
│
├──  /data_model/           # Directory for model and data files
│   ├── COOP_Project.ipynb # Jupyter Notebook for model development
│   └── insurance.csv      # Dataset for insurance charges
│
└── README.md                  # Project documentation
```

## Contributing

We welcome contributions to improve the project. Please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes.
4. Push to the branch.
5. Create a new Pull Request.

## Team

- Data Analyst
- Data Scientist
- Frontend Developer
- Backend Developer
- Project Manager

## Contact

For any inquiries about the project, please contact.

## Acknowledgments

- US Health Insurance Dataset providers
