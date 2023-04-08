# Expense Management Server

This is an Express.js server for an expense management app. Users can add money and expenses by creating a POST request to the expense route. Users can delete any expense by sending a DELETE request to the delete-expense route. Users can see their expense list by month.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/expense-management-server.git`
2. Navigate to the project directory: `cd expense-management-server`
3. Install dependencies: `npm install`
4. Start the server: `npm start`

## Usage

1. In your Next.js app, create a `post` request to `http://localhost:3000/expense` to add a new expense.
2. In your Next.js app, create a `delete` request to `http://localhost:3000/delete-expense` with the expense id to delete an expense.
3. In your Next.js app, create a `get` request to `http://localhost:3000/expenses?month=<month>&page=<page>` to get the list of expenses for a specific month with pagination.
   Replace `<month>` with the desired month and year (e.g. `http://localhost:3000/expenses?month=3&page=1` for March , page 1, and limit of 5 expenses per page).

   The API will return an object with the following properties:

## Credits

This project was created by [Devsnest LLC](https://github.com/Devsnest-LLC).

## License

This project is licensed under the [MIT License](LICENSE).
