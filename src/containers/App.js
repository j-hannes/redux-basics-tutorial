import React, {Component} from 'react'
import AddTodo from '../components/AddTodo'

class App extends Component {
  render() {
    return (
      <div>
        <AddTodo
          onAddClick={text => console.log('adding todo', text)}
        />
      </div>
    )
  }
}

export default App
