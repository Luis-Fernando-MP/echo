import AuthButton from '@/shared/components/AuthButton'
import type { JSX } from 'react'

import Users from './components/Users'
import './style.scss'

const Page = (): JSX.Element => {
  return (
    <div>
      <h1>Hello Echo From Chanel</h1>

      <AuthButton />
      <Users />
    </div>
  )
}

export default Page
