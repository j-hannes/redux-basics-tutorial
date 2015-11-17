import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo, completeTodo, setVisibilityFilter} from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
  render() {
    // injected by connect() call
    const {dispatch, todos, visibilityFilter} = this.props
    return (
      <div>
        <AddTodo
          onAddClick={text =>
            dispatch(addTodo(text))}
        />
        <TodoList
          todos={todos}
          onTodoClick={index =>
            dispatch(completeTodo(index))}
        />
        <Footer
          filter={visibilityFilter}
          onFilterChange={nextFilter =>
            dispatch(setVisibilityFilter(nextFilter))}
        />
      </div>
    )
  }
}

function select(state) {
  return {
    todos: state.todos,
    visibilityFilter: state.visibilityFilter,
  }
}

export default connect(select)(App)
