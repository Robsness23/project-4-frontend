import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Register() {

  const notify = () => toast()
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })

  const [errors, setErrors] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value, 
    })
    setErrors(false)
  }
  console.log(formData)

  async function handleSubmit(e) {
    e.preventDefault()
    console.log('Did I pass this error?')

    try {
      const { data }  = await axios.post('/api/register', formData)
      console.log(data)
      console.log(formData)
      toast("You have successfully registered", {
        className: "toast-success",
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
      })
      setTimeout(() => {
        navigate('/login');
      }, "1500")
     
    } catch (err) {
      console.log(err.response.data)
      toast("Registration Failed", {
        className: "toast-error",
        draggable: true,
        position: toast.POSITION.TOP_CENTER,
      })      
      setErrors(true)
    }
  }
  

  return <div className="section">
    <h2 className="title is-2 has-text-centered">
      Register
    </h2> 
    <div className ="logo-image">
      <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1659869556/Project_Pollinator_qfrxk5-c_scale_h_350_mqijxw.png' alt="logo" />
    </div>       
    <div className="container">
      <div className="box">
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
              {errors && <small className="text-has-danger">{"Hmmm, something isn't right here"}</small>}
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
          <button className="button" onClick={notify}>Submit</button>
          <ToastContainer 
            position="top-center"
            autoClose={1900}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </form>
      </div>
    </div>
  </div>
}