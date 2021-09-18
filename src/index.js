import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware,  compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, enhancers(applyMiddleware(thunk, logger)));

ReactDOM.render(
	<Provider store={store}> <App /> </Provider>,
	document.getElementById('root')
);
