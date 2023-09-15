import React from 'react'

const Home = () => {

  const logout=()=>
  {
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div>
      <h1>Welcome</h1>
      <h2>You are on Home Page</h2>

      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
