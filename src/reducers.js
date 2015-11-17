import {combineReducers} from 'redux'
import {append, update, merge, identity} from 'ramda'
import match from './tools/match'
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions'

const {SHOW_ALL} = VisibilityFilters

function newTodo(text) {
  return {text, completed: false}
}

function markCompleted(todo) {
  return merge(todo, {completed: true})
}

function todos(state = [], action) {
  return match(action.type, {
    ADD_TODO:
      append(newTodo(action.text)),
    COMPLETE_TODO:
      update(action.index, markCompleted(state[action.index])),
    otherwise:
      identity,
  })(state)
}

function visibilityFilter(state = SHOW_ALL, action) {
  return match(action.type, {
    SET_VISIBILITY_FILTER:
      () => action.filter,
    otherwise:
      () => state,
  })
}

const todoApp = combineReducers({todos, visibilityFilter})

export default todoApp
