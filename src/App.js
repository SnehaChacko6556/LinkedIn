import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { login, logout, selectUser } from './features/userSlice'
import Login from './components/Login/Login'
import { auth } from './firebase/firebase'
import Widgets from './components/Widgets/Widgets'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.name,
            photoUrl: userAuth.profilePic,
          }),
        )
      } else {
        // user logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  )
}

export default App
