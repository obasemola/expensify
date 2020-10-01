import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getfilteredExpenses from './selectors/filterExpenses';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
const appRoot = document.getElementById('app');

const store = configureStore();


// store.subscribe(() => {
//   const state = store.getState()
//   const filteredExpenses = getfilteredExpenses(state.expenses, state.filters)
//   console.log(filteredExpenses)

// })




store.dispatch(addExpense({ description: 'Water bill', amount: 6000 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'rent', amount: 50000 }));



const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)





ReactDOM.render(jsx, appRoot)











































































































































// console.log('app')

// class Person {
//   constructor(name, age = 0) {
//     this.name = name;
//     this.age = age
//   }

//   getGreeting(){
//     return `Hi. I am ${this.name}!`
//   }

//   getDescription() {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// }



// class Traveler extends Person {
//   constructor(name, age, homeLocation){
//     super(name, age);
//     this.homeLocation = homeLocation;
//   }

//   hasHomeLocation(){
//     return !!this.homeLocation
//   }

//   getGreeting(){
//     let greeting = super.getGreeting();
//     if(this.hasHomeLocation()) {
//       greeting+= `I am visiting from ${this.homeLocation}`
//     }

//     return greeting

//   }
// }


// const me = new Traveler('Wiz', 12, '')
// console.log(me.getGreeting())