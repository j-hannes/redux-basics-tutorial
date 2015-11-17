import {combineReducers} from 'redux'
import {
  ADD_TODO,
  COMPLETE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from './actions'

const {SHOW_ALL} = VisibilityFilters

function todos(state = [], action) {
  const select = {
    ADD_TODO:      () => [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ],
    COMPLETE_TODO: () => [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ],
    default:       () => state
  }
  return (select[action.type] || select.default)();
}

function visibilityFilter(state = SHOW_ALL, action) {
  const select = {
    SET_VISIBILITY_FILTER: () => action.filter,
    default:               () => state,
  }
  return (select[action.type] || select.default)();
}

const todoApp = combineReducers({
  todos,
  visibilityFilter,
})

export default todoApp
