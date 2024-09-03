import React from 'react'
import './index.css'

const TodoItem = props => {
  const {todoItems, deleteTodoItem} = props
  const {title, id} = todoItems

  const onDelete = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="titleItem">
      <p className="title">{title}</p>
      <button type="button" className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
