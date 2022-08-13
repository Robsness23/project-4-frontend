import React from 'react'
import Plant from '../components/Plant'
import { baseUrl } from '../config'

function NectarPlants() {

  const [thyme, setThyme] = React.useState([])
  const [rose, setRose] = React.useState([])  
  const [dahlia, setDahlia] = React.useState([])
  const [chive, setChive] = React.useState([])

  React.useEffect(() => {
    const getThyme = async () => {
      const res = await fetch(`${baseUrl}/plants/2`)
      const json = await res.json()
      setThyme(json)
    }
    getThyme()
  }, [])

  React.useEffect(() => {
    const getRose = async () => {
      const res = await fetch(`${baseUrl}/plants/23`)
      const json = await res.json()
      setRose(json)
    }
    getRose()
  }, [])
  console.log(rose)

  React.useEffect(() => {
    const getDahlia = async () => {
      const res = await fetch(`${baseUrl}/plants/19`)
      const json = await res.json()
      setDahlia(json)
    }
    getDahlia()
  }, [])

  React.useEffect(() => {
    const getChive = async () => {
      const res = await fetch(`${baseUrl}/plants/17`)
      const json = await res.json()
      setChive(json)
    }
    getChive()
  }, [])

  return (  
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-responsive">       
          {/* <div className="column is-one-quarter-desktop is-third-tablet is-half-mobile"> */}
          {rose ? (            
            <Plant
              id={rose.id}
              name={rose.name}                   
              image={rose.image}
            />
          ) : (
            <p>Loading plant...</p>
          )}
          {thyme ? (
            <Plant
              id={thyme.id}
              name={thyme.name}
              image={thyme.image}
            />
          ) : (
            <p>Loading plant...</p>
          )}
          {dahlia ? (
            <Plant
              id={dahlia.id}
              name={dahlia.name}
              image={dahlia.image}
            />
          ) : (
            <p>Loading plant...</p>
          )}
          {chive ? (
            <Plant
              id={chive.id}
              name={chive.name}
              image={chive.image}
            />
          ) : (
            <p>Loading plant...</p>
          )}
                   
        </div>   
         
        {/* </div> */}
      </div>
    </section>    
  )
}

export default NectarPlants