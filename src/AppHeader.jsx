import React from 'react'

function AppHeader(props) {
  return (
    <header className="App-header">
      <h1 className="App-title">{props.title}</h1>
    </header>
  )
}

export default AppHeader