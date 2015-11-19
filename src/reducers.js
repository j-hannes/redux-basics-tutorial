import {combineReducers} from 'redux'
import {append, update, merge} from 'ramda'
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters
} from './actions'

const {SHOW_ALL} = VisibilityFilters

function todos(state = [], action) {
  switch (action.type) {
  case ADD_TODO:
    return append({text: action.text, completed: false}, state)
  case COMPLETE_TODO:
    const completedTodo = merge(state[action.index], {completed: true})
    return update(action.index, completedTodo, state)
  default:
    return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
  case SET_VISIBILITY_FILTER:
    return action.filter
  default:
    return state
  }
}

const todoApp = combineReducers({todos, visibilityFilter})

export default todoApp
