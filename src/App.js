import React from "react"
import {Heading,UserProfile,Footer} from './Components/index'

export default function App() {
  return (
    <>
      <Heading/>
      <UserProfile urlTofetch='https://randomuser.me/api/?page=1&results=1&seed=abc'/>
      <Footer/> 
    </>
  )
}