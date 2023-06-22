import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = state => state.todos.map(todo => todo.id)

const TodoList = () => {
  const todoId = useSelector(selectTodoIds, shallowEqual)

  const renderedListItems = todoId.map(todoId => {
    return <TodoListItem key={todoId} id={todoId} />
  })

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList