import React from 'react'
import { render } from 'react-dom'
import App from '../react_components/App'

render(<App/>, document.getElementById('app'))

// var React = require('react');
// var ReactDOM = require('react-dom');
// var ReactRouter = require('react-router');
// var Router = ReactRouter.Router,
//     Route = ReactRouter.Route,
//     hashHistory = ReactRouter.hashHistory

// console.log(ReactRouter);

// // This file holds our JSON array of turtles
// // may need json loader for webpack
// var data = require('./turtles.json')

// var NinjaList = React.createClass({
//   render: function(){
//     var ninjas = this.props.turtles.map(function(turtle, index){
//       return (
//         <li key={index}>
//           <a href="#">{turtle.name}</a>
//         </li>
//       )
//     })
//     return (
//       <ul>
//         {ninjas}
//       </ul>
//     )
//   }
// });

// var NinjaDescription = React.createClass({
//   render: function(){
//     return(
//       <div>
//         <h1>Ninja Name</h1>
//         <p>Ninja Description</p>
//       </div>
//     )
//   }
// });

// var NinjaComponent = React.createClass({
//     render: function (){
//         return (
//           <div>
//             <h1>Greetings Ninja!</h1>
//             <h2>Click on a ninja for more information</h2>
//             <NinjaList turtles={this.props.data}/>
//             <NinjaDescription />
//           </div>
//         )
//     }
// });

// ReactDOM.render(<NinjaComponent data={data}/>, document.getElementById('app'));

// var App = React.createClass({
//   render: function(){
//     return (
//       <Router history={hashHistory}>
//         <Route path='/' component={NinjaComponent} data={this.props.data}/>
//       </Router>
//     )
//   }
// })

// ReactDOM.render(<App data={data}/>, document.getElementById('app'))
