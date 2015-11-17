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

function todos(state = [], action) {
  return match(action.type, {
    ADD_TODO:
      append({text: action.text, completed: false}),
    COMPLETE_TODO:
      update(action.index, merge(state[action.index], {completed: true})),
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
