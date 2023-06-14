import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAllUser } from './userSlice'

export const UserList = () => {
  const user = useSelector(selectAllUser)

  const renderedUser = user.map(user => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </li>
  ))

  return (
    <section>
      <h2>User</h2>

      <ul>{renderedUser}</ul>
    </section>
  )
}