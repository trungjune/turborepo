import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [serverResponse, setServerResponse] = useState('');

  const checkServerConnection = async () => {
    try {
      const response = await fetch('/api/v1/test'); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      setServerResponse(data); // Lưu kết quả trả về từ server
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setServerResponse('Error: Could not connect to server');
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <button onClick={checkServerConnection}>Ping Server</button>
      <p>Server response: {serverResponse}</p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
