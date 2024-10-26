// src/App.js
import React, { useReducer } from 'react';
import Container from './components/Container/Container';

import "./App.css"

const initialState = {
  income: 0,
  expense: 0,
  result: 0,
  history: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_INCOME':
      return { ...state, income: action.payload };
    case 'SET_EXPENSE':
      return { ...state, expense: action.payload };
    case 'CALCULATE':
      const result = state.income - state.expense;
      return { ...state, result };
    case 'SAVE_HISTORY':
      const date = new Date().toLocaleDateString();
      const newHistoryItem = {
        income: state.income,
        expense: state.expense,
        result: state.result,
        date
      };
      return { ...state, history: [...state.history, newHistoryItem] };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <Container state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
