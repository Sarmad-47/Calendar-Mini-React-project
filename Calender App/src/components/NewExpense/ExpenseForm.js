import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredtitle, setTitle] = useState("");
  const [enteredamount, setAmount] = useState("");
  const [entereddate, setDate] = useState("");
  const titleChangeHandler = (event) => {
    setTitle(event.target.value); // to check the value of input field when changed by user
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value); // to check the value of input field when changed by user
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value); // to check the value of input field when changed by user
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredtitle,
      amount: +enteredamount,
      date: new Date(entereddate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredamount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            value={entereddate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense_actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
