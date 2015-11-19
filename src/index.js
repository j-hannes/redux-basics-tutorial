import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './containers/App'
import todoApp from './reducers'

const finalCreateStore = window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore

let store = finalCreateStore(todoApp)

const rootElement = document.getElementById('root')

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
