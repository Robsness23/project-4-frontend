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
                  <Link to="/" className="button is-rounded">
              Home
                  </Link>            
                  <Link to='/nectarcafe' className="button is-rounded">
              Nectar Cafe 
                  </Link>
                  <Link to='/plants' className="button is-rounded">
              All Plants
                  </Link>
                  <div className="navbar-end">
                    {loggedIn && <Link to='/hivemind' className="button is-rounded">
              Hive Mind 
                    </Link>}
                    <Link to="/register" className="button is-rounded">
              Register
                    </Link>
                    {!loggedIn && <Link to="/login" className="button is-rounded">
              Login
                    </Link>}
                    {loggedIn && <Link to="/" className="button is-rounded"
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