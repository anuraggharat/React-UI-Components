import React from 'react'
import CenteredLayout from '../../../components/CenteredLayout'
import Users from './Components/Users'
import Posts from './Components/Posts'

export default function Page() {
  return (
    <CenteredLayout>
        <Users />
        <Posts />
    </CenteredLayout>
  )
}
