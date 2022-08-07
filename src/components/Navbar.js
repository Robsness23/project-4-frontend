import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { loggedInEmail } from '../lib/auth'

function NavBar() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const navigate = useLocation()

  React.useEffect(() => {
    setLoggedIn(loggedInEmail())
  }, [navigate])

  async function logOut() {
    localStorage.clear()
  }


  
  

  return (
    <>
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-menu is-active">
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <Link to="/" className="button is-light">
                    <strong>Home</strong>
                  </Link>            
                  <Link to='/nectarcafe' className="button is-light">
              Nectar Cafe 
                  </Link>
                  <Link to='/plants' className="button is-light">
              All Plants
                  </Link>
                  <div className="navbar-end">
                    {loggedIn && <Link to='/hivemind' className="button is-light">
              Hive Mind 
                    </Link>}
                    <Link to="/register" className="button is-light">
              Register
                    </Link>
                    {!loggedIn && <Link to="/login" className="button is-light">
              Login
                    </Link>}
                    {loggedIn && <Link to="/" className="button is-light"
                      onClick={logOut}>
              Logout
                    </Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavBar