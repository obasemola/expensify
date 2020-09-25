import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
const appRoot = document.getElementById('app');

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard</div>
);

const AddExpensePage = () => (
  <div>This is from my expense component</div>
);

const EditExpensePage = () => (
  <div>
    This where I edit stuff
  </div>
);

const HelpPage = () => (
  <div>
    You need some help?
  </div>
);


const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/'>Go to the home page</NavLink>
    <NavLink to='/create'>Go to the create page</NavLink>
    <NavLink to='/edit'>Go to the edit page</NavLink>
    <NavLink to='/help'>Go to the help page</NavLink>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header path='/header'/>
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true}/>
        <Route path='/create' component={AddExpensePage}/>
        <Route path='/edit' component={EditExpensePage}/>
        <Route path='/help' component={HelpPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)


ReactDOM.render(routes, appRoot)











































































































































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