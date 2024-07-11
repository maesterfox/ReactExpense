# React Expense Tracker

This project is a conversion of an old JavaScript expense tracker project into a modern TypeScript/React application using Vite for a faster and leaner development experience. The original project was a simple expense tracker built with vanilla JavaScript, HTML, and CSS. The new project leverages the power of React, TypeScript, and Vite to provide a more robust, scalable, and maintainable codebase.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo
Check out the live demo of the application [here](https://your-live-demo-link).

## Features
- Add new transactions (income/expense)
- Delete transactions
- Display balance, income, and expenses
- Use of React Context API for state management
- TypeScript for static type checking
- Fast development and hot module replacement with Vite

## Tech Stack
- **Frontend:** React, TypeScript
- **Bundler:** Vite
- **State Management:** React Context API
- **Styling:** CSS

## Getting Started

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/maesterfox/ReactExpense.git
    cd ReactExpense
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application
To start the development server, run:
```bash
npm run dev
```
This will start the application on `http://localhost:3000`.

### Building for Production
To create a production build, run:
```bash
npm run build
```
This will output the build files to the `dist` directory.

## Project Structure
```
src/
│
├── components/
│   ├── Header.tsx
│   ├── Balance.tsx
│   ├── IncomeExpenses.tsx
│   ├── TransactionList.tsx
│   ├── AddTransaction.tsx
│   └── Transaction.tsx
│
├── context/
│   ├── GlobalState.tsx
│   └── AppReducer.ts
│
├── types.ts
├── App.tsx
├── App.css
└── main.tsx
```

- **components/**: Contains the React components.
- **context/**: Contains the context API setup for global state management.
- **types.ts**: Type definitions for the project.
- **App.tsx**: Main application component.
- **App.css**: Global styles.
- **main.tsx**: Entry point of the React application.

## Usage
1. **Add Transaction**: Use the form to add a new transaction by providing the text and amount (negative for expenses, positive for income).
2. **Delete Transaction**: Click the "x" button next to a transaction to delete it.
3. **View Balance, Income, and Expenses**: The balance, total income, and total expenses are calculated and displayed automatically.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
David Fox - [@maesterfox](https://github.com/maesterfox)

Project Link: [https://github.com/maesterfox/ReactExpense](https://github.com/maesterfox/ReactExpense)

---

