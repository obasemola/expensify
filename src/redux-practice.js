import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const expenseReducerDefaultState = [];
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};


const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const setTextFilter = (update = '') => ({
  type: 'SET_TEXT_FILTER',
  update
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  
})
const sortByDate = () => ({
  type: 'SORT_BY_DATE',

})

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});



const expenseReducer = (( state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state, action.expense
      ]

    case 'REMOVE_EXPENSE':
      return state.filter(el => el.id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          } 
        } else {
          return
        }
      })

    default:
      return state
  }
});

const filterReducer = ((state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.update
      }

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }

    default:
      return state
  }
})


const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
}));

const getfilteredExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return b.createdAt - a.createdAt
    } else if (sortBy === 'amount') {
      return b.amount - a.amount
    }
  })
}

store.subscribe(() => {
  const state = store.getState()
  const filteredExpenses = getfilteredExpenses(state.expenses, state.filters)
  console.log(filteredExpenses)
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 130 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 1000 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// store.dispatch(setTextFilter('coffee'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
store.dispatch(sortByDate());
// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250))