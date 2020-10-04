import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListItem} from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test('should render expense list item', () => {
  const wrapper = shallow(<ExpenseListItem description={expenses[0].description} createdAt={expenses[0].createdAt} amount={expenses[0].amount} />)

  expect(wrapper).toMatchSnapshot()
})