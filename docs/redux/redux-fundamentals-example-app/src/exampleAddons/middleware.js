import { client } from '../api/client'

export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

export function exampleMiddleware(storeAPI) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      return next(action)
    }
  }
}

export const anotherExampleMiddleware = storeAPI => next => action => {

  return next(action)
}

export const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', storeAPI.getState())
  return result
}

export const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }

  return next(action)
}

export const fetchTodosMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/fetchTodos') {
    client.get('todos').then(todos => {
      storeAPI.dispatch({ type: 'todos/todosLoaded', payload: todos })
    })
  }

  return next(action)
}

export const asyncFunctionMiddleware = storeAPI => next => action => {
  if (typeof action === 'function') {
    return action(storeAPI.dispatch, storeAPI.getState)
  }

  return next(action)
}