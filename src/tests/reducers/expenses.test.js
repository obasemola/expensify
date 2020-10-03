import moment from 'moment';
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures'

test('should set up default expenses values', () => {
  const state = expenseReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual([])
});

test('should add new expense', () => {
  const newExpense = {
    id: expect.any(String),
    description: 'rent',
    note: 'howfar',
    amount: 100,
    createdAt: moment()
  }

  const action = { type: 'ADD_EXPENSE', expense: newExpense }
  const state = expenseReducer(expenses, action);


  expect(state.length).toBe(4)
});

test('should remove expense by id', () => {

  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found', () => {

  const action = {
    type: 'REMOVE_EXPENSE',
    id: '8'
  }
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses)
});

test('should edit expense with id', () => {

  const action = {
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'how well',
      amount: 200,
    },
    id: expenses[0].id
  }
  const state = expenseReducer(expenses, action);
  expect(state[0]).toEqual({
      id: '1',
      description: 'Gum',
      note: 'how well',
      amount: 200,
      createdAt: 0

  })
});

test('should not edit expense if id not found', () => {

  const action = {
    type: 'EDIT_EXPENSE',
    updates: {
      note: 'how well',
      amount: 200,
    },
    id: '9'
  }
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses)
});