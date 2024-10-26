// src/components/Container.js
import React from 'react';
import ExpenseInput from '../ExpenseInput/ExpenseInput';
import IncomeInput from '../IncomeInput/IncomeInput';
import Button from '../Button/Button';
import Result from '../Result/Result';
import History from '../History/History';

import "./Container.css"

function Container({ state, dispatch }) {
  const handleIncomeChange = (value) => {
    dispatch({ type: 'SET_INCOME', payload: Number(value) });
  };

  const handleExpenseChange = (value) => {
    dispatch({ type: 'SET_EXPENSE', payload: Number(value) });
  };

  const calculateResult = () => {
    dispatch({ type: 'CALCULATE' });
  };

  const saveToHistory = () => {
    dispatch({ type: 'SAVE_HISTORY' });
  };

  return (
    <div className='container'>
      <h2>برنامه محاسبه درآمد و هزینه</h2>
      <div className='inputs'>
        <ExpenseInput value={state.expense} onChange={handleExpenseChange} /><br />
        <IncomeInput value={state.income} onChange={handleIncomeChange} />
      </div><br />
      <Button onClick={calculateResult} label="محاسبه" /><br />
      <Result result={state.result} /><br />
      <Button onClick={saveToHistory} label="ذخیره" /><br />
      <History history={state.history} />
    </div>
  );
}

export default Container;
