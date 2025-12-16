# Linear Regression Visualizer

An interactive web application designed to help users understand and visualize linear regression by plotting custom data points and instantly calculating and displaying the best-fit line.

## Getting Started

To get the application running locally, follow these simple steps.

1. Clone the Repository

```bash
git clone https://github.com/swayam9705/Linear-Regression-Visualizer.git

cd linear-regression-visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:

```bash
npm run dev
```

## Feature

* **Interactive Data Input**: Easily add custom data points directly on the chart via input form.

* **Real-time Calculation**: The Linear Regression Line is calculated and updated in real-time as data points are added or removed

## Technology Stack

![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
* **Vue.js**:
The core javascript framework for building user interfaces.

![Pinia](https://img.shields.io/badge/Pinia-FFDA64?style=for-the-badge&logo=pinia&logoColor=black)
* **Pinia**: The state management library for Vue.js similar to Context API in React. Provides simple and modular way to manage application data

![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
* **vue-chart.js**: A chart.js wrapper for Vue.js used to render the interactive scatter plot and regression line.

* **Custom Linear Regression Implementation**: The mathematical framework for the app. The model is calculated from scratch using Least Squared Error and gradient descent.