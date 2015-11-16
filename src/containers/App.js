import React, {Component} from 'react'
import AddTodo from '../components/AddTodo'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

class App extends Component {
  render() {
    // injected by connect() call
    const {dispatch} = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text => dispatch(addTodo(text))}
        />
      </div>
    )
  }
}

function select(state) {
  return state
}

export default connect(select)(App)
