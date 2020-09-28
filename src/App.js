import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
const appRoot = document.getElementById('app');
ReactDOM.render(<AppRouter/>, appRoot)











































































































































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