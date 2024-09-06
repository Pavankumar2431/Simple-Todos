import {Component} from 'react'
import {CiEdit} from 'react-icons/ci'
import {MdDeleteOutline} from 'react-icons/md'

import './index.css'

class TodoItem extends Component {
  state = {
    editing: false,
    updatedTitle: '',
  }

  handleEdit = () => {
    const {todoDetails} = this.props
    this.setState({editing: true, updatedTitle: todoDetails.title})
  }

  handleSave = () => {
    const {todoDetails, updateTodoTitle} = this.props
    const {updatedTitle} = this.state

    if (updatedTitle.trim()) {
      updateTodoTitle(todoDetails.id, updatedTitle)
    }
    this.setState({editing: false})
  }

  handleChange = e => {
    this.setState({updatedTitle: e.target.value})
  }

  render() {
    const {todoDetails, deleteTodo, toggleComplete} = this.props
    const {editing, updatedTitle} = this.state
    return (
      <li
        className={todoDetails.completed ? 'todo-item completed' : 'todo-item'}
      >
        {editing ? (
          <div className="edit-section">
            <input
              type="text"
              value={updatedTitle}
              onChange={this.handleChange}
              className="edit-input"
            />
            <button
              onClick={this.handleSave}
              type="button"
              className="save-btn"
            >
              Save
            </button>
          </div>
        ) : (
          <>
            <input
              className="check-input"
              type="checkbox"
              checked={todoDetails.completed}
              onChange={() => toggleComplete(todoDetails.id)}
            />
            <p className="title">{todoDetails.title}</p>
            <button
              onClick={this.handleEdit}
              type="button"
              className="edit-btn"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todoDetails.id)}
              type="button"
              className="delete-btn"
            >
              <MdDeleteOutline size={25} />
            </button>
          </>
        )}
      </li>
    )
  }
}

export default TodoItem
