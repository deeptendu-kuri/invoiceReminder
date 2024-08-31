import React from 'react'
import GoogleButton from 'react-google-button'
import "./Home.css"

function Home() {
  return (
    <div>
        <div className="container">
        <h2>Welcome, please sign in to continue !</h2>
        <GoogleButton onClick={() => { console.log('Google button clicked') }}/>
        </div>
    </div>
  )
}

export default Home