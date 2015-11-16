import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

class App extends Component {
  render() {
    // injected by connect() call
    const {dispatch, todos} = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text => dispatch(addTodo(text))}
        />
        <TodoList
          todos={todos}
        />
      </div>
    )
  }
}

function select(state) {
  return state
}

export default connect(select)(App)
