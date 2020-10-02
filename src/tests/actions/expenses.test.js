import {
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses';


describe('should generate expenses action objects',() => {
  test('simulating remove object',() => {
    const action = removeExpense({id: '123fds'})
  
    expect(action).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '123fds'
    })
  });
  
  test('should edit data',() => {
    const newNote = {
      note: 'This was last months rent'
    }
  
    const action = editExpense('123adf', newNote)
  
    expect(action).toEqual({
      type: 'EDIT_EXPENSE',
      id: '123adf',
      updates: {
  
        ...newNote
  
      }
  
    })
  });
  
  test('should add indicated data', () => {
    const expenseData = {
      description: 'Rent',
      amount: 109500,
      createdAt: 1000,
      note: 'This was last months rent'
    }
  
    const action = addExpense(expenseData)
  
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        ...expenseData,
        id: expect.any(String)
      }
    })
  });
  
  test('should use default data', () => {
  
    const action = addExpense()
  
    expect(action).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0,
        id: expect.any(String)
      }
    })
  })
})