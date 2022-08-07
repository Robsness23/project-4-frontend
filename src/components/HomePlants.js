import React from 'react'
import Plant from '../components/Plant'
import { baseUrl } from '../config'

function HomePlants() {

  const [hibiscus, setHibiscus] = React.useState([])
  const [verbena, setVerbena] = React.useState([])
  const [dahlia, setDahlia] = React.useState([])
  const [lavender, setLavender] = React.useState([])

  React.useEffect(() => {
    const getHibiscus = async () => {
      const res = await fetch(`${baseUrl}/plants/2`)
      const json = await res.json()
      setHibiscus(json)
    }
    getHibiscus()
  }, [])

  React.useEffect(() => {
    const getVerbena = async () => {
      const res = await fetch(`${baseUrl}/plants/14`)
      const json = await res.json()
      setVerbena(json)
    }
    getVerbena()
  }, [])

  React.useEffect(() => {
    const getDahlia = async () => {
      const res = await fetch(`${baseUrl}/plants/16`)
      const json = await res.json()
      setDahlia(json)
    }
    getDahlia()
  }, [])

  React.useEffect(() => {
    const getLavender = async () => {
      const res = await fetch(`${baseUrl}/plants/1`)
      const json = await res.json()
      setLavender(json)
    }
    getLavender()
  }, [])

  return (  
    <section className="section">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {hibiscus ? (            
            <Plant
              id={hibiscus.id}
              name={hibiscus.name}
              image={hibiscus.image}
            />
          ) : (
            <p>Loading plant...</p>
          )}
          {verbena ? (
            <Plant
              id={verbena.id}
              name={verbena.name}
              image={verbena.image}
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
          {lavender ? (
            <Plant
              id={lavender.id}
              name={lavender.name}
              image={lavender.image}
            />
          ) : (
            <p>Loading plant...</p>
          )}
      

        </div>
      </div>
    </section>
  )


}

export default HomePlants