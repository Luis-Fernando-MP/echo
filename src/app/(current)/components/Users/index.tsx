'use client'

import { api } from '@api'
import { useQuery } from 'convex/react'
import type { JSX } from 'react'

const Users = (): JSX.Element => {
  const users = useQuery(api.users.getUsers)
  console.log(users?.)

  return <div></div>
}

export default Users
