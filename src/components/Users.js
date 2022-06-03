import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get('filter') === 'active'

  return (
    <div>
      <Link to="/users/1">
        <h2>User 1</h2>
      </Link>
      <Link to="/users/2">
        <h2>User 2</h2>
      </Link>
      <Link to="/users/3">
        <h2>User 3</h2>
      </Link>
      <Outlet />
      <button onClick={ () => setSearchParams({ filter:'active'})}>Active Users</button>
      <button onClick={ () => setSearchParams({})}>Reset Users</button>
      { showActiveUsers ? (
      <h3>Showing Active Users </h3>
      ) : (
        <h3>Show All Users</h3>
      ) }
    </div>
  )
}

export default Users