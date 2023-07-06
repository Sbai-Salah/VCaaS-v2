import React, { useState } from 'react'

import { Jutsu } from 'react-jutsu'

const App = () => {
  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)
  const [password, setPassword] = useState('')

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return (
    <div>
      <h2>&lt;Jutsu VCaaS /&gt; Demo !</h2>
      
      {call ? (<Jutsu
        roomName={room}
        password={password}
        displayName={name}
        onMeetingEnd={() => console.log('Meeting has ended')}
        loadingComponent={<p>ʕ •ᴥ•ʔ jitsi is loading ...</p>} />)
        : (
          <form>
            <input id='room' type='text' placeholder='Class' value={room} onChange={(e) => setRoom(e.target.value)} />
            <input id='name' type='text' placeholder='Nom' value={name} onChange={(e) => setName(e.target.value)} />
            <input id='password' type='text' placeholder='Mot de Passe (optional)' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleClick} type='submit'>
              Start / Join
            </button>
          </form>
        )}
      <p>Made with <span role='img' aria-label='coffee'>☕</span> by <a href='https://github.com/Sbai-Salah'>HUMAN AI VISIO CONF</a></p>
      
    </div>
  )
}

export default App
