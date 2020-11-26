import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router ,Switch} from 'react-router-dom';

import App from './App';
import Component1 from "./Component1";
import ReduxApp from "./Redux1";


import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Component1</Link>
        </li>
        <li>
          <Link to="/redux">Redux</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:id" component={Component1} /> #url parameter
        <Route path="/redux" component={ReduxApp} /> #redux
      </Switch>
    </div>
  </Router>
)

const rootReducer = combineReducers({
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer
})

const store = createStore(rootReducer)
console.log(store.getState())

// const routing = (
//   <Router>
//     <div>
//       <Route path="/" component={App} />
//       <Route path="/comp" component={Component1} />
//     </div>
//   </Router>
// )

ReactDOM.render(routing, document.getElementById('root'))
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );

// render(<component/>,window.document.getElementById("component"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
