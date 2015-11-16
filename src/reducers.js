import {ADD_TODO} from './actions'

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default function todoApp(state = {}, action) {
  return {
    todos: todos(state.todos, action)
  }
}
