import React from 'react'
import Plant from '../components/Plant'
import { baseUrl } from '../config'


function HomePlants() {

  const [primrose, setPrimrose] = React.useState([])
  const [hibiscus, setHibiscus] = React.useState([])
  const [honeysuckle, setHoneysuckle] = React.useState([])
  const [lavender, setLavender] = React.useState([])

  React.useEffect(() => {
    const getPrimrose = async () => {
      const res = await fetch(`${baseUrl}/plants/3`)
      const json = await res.json()
      setPrimrose(json)
    }
    getPrimrose()
  }, [])

  React.useEffect(() => {
    const getHibiscus = async () => {
      const res = await fetch(`${baseUrl}/plants/18`)
      const json = await res.json()
      setHibiscus(json)
    }
    getHibiscus()
  }, [])

  React.useEffect(() => {
    const getHoneysuckle = async () => {
      const res = await fetch(`${baseUrl}/plants/5`)
      const json = await res.json()
      setHoneysuckle(json)
    }
    getHoneysuckle()
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
          {primrose ? (            
            <Plant
              id={primrose.id}
              name={primrose.name}                   
              image={primrose.image}
            />
          ) : (
            <p>Loading plant...</p>
          )}
          {hibiscus ? (
            <Plant
              id={hibiscus.id}
              name={hibiscus.name}
              image={hibiscus.image}
            />
          ) : (
            <p>Loading plant...</p>
          )}
          {honeysuckle ? (
            <Plant
              id={honeysuckle.id}
              name={honeysuckle.name}
              image={honeysuckle.image}
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