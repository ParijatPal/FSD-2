import { useState } from 'react'

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', { email, password })
    alert('Login Successful!')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="form-container">
      <div className="form-wrapper">
        <h1>23BCC70037 MST Login Form</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Form
