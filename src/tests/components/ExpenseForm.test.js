import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

describe('should render expense form',() => {
  test('should render Expense form', () => {
    const wrapper = shallow(<ExpenseForm/>)
  
    expect(wrapper).toMatchSnapshot()
  });

  test('should render expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)

    expect(wrapper).toMatchSnapshot()    
  });

  test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => {}
    })
  })
})

