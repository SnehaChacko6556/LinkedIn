import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { auth } from '../../firebase/firebase'
import downloadLogo from '../../images/downloadLogo.png'
import './Login.css'
import { login } from '../../features/userSlice'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const dispatch = useDispatch()

  const loginToApp = (e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.profilePic,
        }),
      )
    }).catch((error) => alert(error));
  }
  const register = () => {
    if (!name) {
      return alert('Please Enter a full name!')
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoUrl: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              }),
            )
          })
      })
      .catch((error) => {
        alert(error)
      })
  }

  return (
    <div className="login">
      <img src={downloadLogo} alt="" />
      <form>
        <input
          type="text"
          placeholder="FullName (required if registeering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile Picture URL (optional)"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  )
}

export default Login
