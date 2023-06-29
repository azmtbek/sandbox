import React from 'react'
import { useSelector } from 'react-redux'
import TodoListItem from './TodoListItem'
import { selectFilteredTodoIds } from './todosSlice'

const TodoList = () => {
  const selectFilteredTodoId = useSelector(selectFilteredTodoIds)
  const renderedListItems = selectFilteredTodoId.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList