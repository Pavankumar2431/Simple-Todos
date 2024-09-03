import {Component} from 'react'

import TodoItem from '../TodoItem/index.js'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {titleDetailsList: initialTodosList}

  deleteTodoItem = id => {
    const {titleDetailsList} = this.state
    const filteredTodoList = titleDetailsList.filter(each => each.id !== id)
    this.setState({
      titleDetailsList: filteredTodoList,
    })
  }

  render() {
    const {titleDetailsList} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1>Simple Todos</h1>
          <ul>
            {titleDetailsList.map(eachTitle => (
              <TodoItem
                todoItems={eachTitle}
                key={eachTitle.id}
                deleteTodoItem={this.deleteTodoItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
