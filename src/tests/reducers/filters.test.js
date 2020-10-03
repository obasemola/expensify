import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should set up default filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' })

  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to amount', () => {
  const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })

  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sortBy to date', () => {
  const state = filterReducer(initialState, { type: 'SORT_BY_DATE' })
  const initialState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };

  const result = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }

  expect(state).toEqual(result)
});

test('should set textfilter', () => {
  const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', update: 'rent' })


  const result = {
    ...state,
    text: 'rent'
  }

  expect(state).toEqual(result)
});

test('should set start date', () => {
  const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0) })


  const result = {
    ...state,
    startDate: moment(0)
  }

  expect(state).toEqual(result)
});

test('should set end date', () => {
  const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: moment(12345) })


  const result = {
    ...state,
    endDate: moment(12345)
  }

  expect(state).toEqual(result)
});