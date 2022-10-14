import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld/HelloWorld'

const App = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={(
          <HelloWorld />
        )}
      />
    </Routes>
  </Router>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
