//require keywords for webpack to use the modules
let React = require('react');
let ReactDOM = require('react-dom');
//object destructuring syntax es6
//4 variables from the react-router library
let{Route, Router, IndexRoute, hashHistory} = require('react-router');
let Main = require('Main');
let Timer = require('Timer');
let Countdown = require('Countdown');


//Load foundation
//inject into html
//load css
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="countdown" component={Countdown}/>
  <IndexRoute component={Timer}/>
  </Route>
</Router>,
  document.getElementById('app')
  );



//presentational components take props and render then to the screen
//state can be changes and props can't
//container components should just only render children and maintain state
//props are used for initializing a component with data
//state is used for keeping track of data that changes in a component
//presentational component uses props to display info
