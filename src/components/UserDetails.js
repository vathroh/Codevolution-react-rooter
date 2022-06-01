import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {userId} = useParams();
    // const params = useParams();
    // const userId = params.userId;
  return (
    <div>
        <h3>Details about user {userId}</h3>
    </div>
  )
}

export default UserDetails