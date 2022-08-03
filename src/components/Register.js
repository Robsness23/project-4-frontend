import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })

  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value, 
    })
    setErrors({
      ...errors,
      [name]: '',
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('Did I pass this error?')

    try {
      await axios.post('/api/register', formData)
      navigate('/login')
    } catch (err) {
      console.log(err.response.data)

      setErrors(err.response.data.errors)
    }
  }
  console.log(errors)

  return <div className="section">
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Username</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'username'} 
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name={'email'}
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'password'}
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        {/* <div className="field">
          <label className="label">Confirm password</label>
          <div className="control">
            <input
              className="input"
              type="password"
              name={'passwordConfirmation'}
              value={formData.passwordConfirmation}
              onChange={handleChange}
            />
          </div>
        </div> */}
        <button className="button">Submit</button>
      </form>
    </div>
  </div>
}