document.addEventListener('DOMContentLoaded', function () {
    displayExpenses();
});

function addExpense() {
    const amount = parseFloat(document.getElementById('expenseAmount').value);
    const description = document.getElementById('expenseDescription').value;
    const category = document.getElementById('expenseCategory').value;

    if (isNaN(amount) || !description || !category) {
        alert('Please enter valid values for amount, description, and category.');
        return;
    }

    const expense = {
        amount: amount,
        description: description,
        category: category,
    };

    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));

    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDescription').value = '';

    displayExpenses();
}

function displayExpenses() {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expenseList = document.getElementById('expenseList');

    expenseList.innerHTML = '';

    expenses.forEach(function (expense, index) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            Amount: Rupees ${expense.amount.toFixed(2)} - 
            Description: ${expense.description} - 
            Category: ${expense.category} - 
            <button onclick="editExpense(${index})">Edit</button>
            <button onclick="deleteExpense(${index})">Delete</button>
        `;
        expenseList.appendChild(listItem);
    });
}

function editExpense(index) {
    const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const expenseToEdit = expenses[index];

    const newAmount = parseFloat(prompt('Edit amount:', expenseToEdit.amount));
    const newDescription = prompt('Edit description:', expenseToEdit.description);
    const newCategory = prompt('Edit category:', expenseToEdit.category);

    if (!isNaN(newAmount) && newDescription && newCategory) {
        expenseToEdit.amount = newAmount;
        expenseToEdit.description = newDescription;
        expenseToEdit.category = newCategory;

        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();
    } else {
        alert('Invalid input. Changes were not saved.');
    }
}

function deleteExpense(index) {
    const confirmDelete = confirm('Are you sure you want to delete this expense?');

    if (confirmDelete) {
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();
    }
}
