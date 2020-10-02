import moment from 'moment';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../../actions/filters'

describe('should generate filter action objects',() => {
  test('should generate start date action object', () => {
    const action = setStartDate(moment(0))
  
    expect(action).toEqual({
      type: 'SET_START_DATE',
      startDate: moment(0)
    })
  });
  
  test('should generate end date action object', () => {
    const action = setEndDate(moment(0))
  
    expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
    })
  });
  
  test('should generate text filter action object with a value', () => {
    const action = setTextFilter('rent')
  
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      update: 'rent'
    })
  });
  
  test('should generate text filter action object with no value', () => {
    const action = setTextFilter()
  
    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      update: ''
    })
  });
  
  test('should generate sort by amount action object', () => {
    const action = sortByAmount()
  
    expect(action).toEqual({
      type: 'SORT_BY_AMOUNT',
  
    })
  });
  
  test('should generate sort by date action object', () => {
    const action = sortByDate()
  
    expect(action).toEqual({
      type: 'SORT_BY_DATE',
  
    })
  });
})