import React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { loggedInUserId, isCreator } from '../lib/auth'
import axios from 'axios'
import { baseUrl } from "../config"


function ShowPlant() {
  const [plant, setPlant] = React.useState(undefined)
  const [comments, setComments] = React.useState('')
  const [newComment, setNewComment] = React.useState({})
  const navigate = useNavigate()
  const { plantId } = useParams()

  React.useEffect(() => {
    fetch(`${baseUrl}/plants/${plantId}`)
      .then(resp => resp.json())
      .then(data => setPlant(data))
  }, [plantId, newComment])

  async function handleDelete() {
    try {
      await axios.delete(`${baseUrl}/plants/${plant.id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      })
      navigate('/plants')
    } catch (e) {
      console.log(e)
    }
  }

  async function handleComment() {
    console.log(plant.id)
    try {
      const { data } = await axios.post(
        `${baseUrl}/plants/${plant.id}/comments`,
        { content: comments },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        }
      )
      setNewComment(data)
      setComments('')
    } catch (e) {
      console.log(e)
    }
  }

  console.log(plant)
  return (
    <section className="section">
      <div className="container">
        {plant ? (
          <div>
            <h2 className="title has-text-centered">{plant.name}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={plant.image} alt={plant.name} />
                </figure>
                <br />
                {isCreator(plant.user.id) && <button
                  className="button is-warning is-light"
                  onClick={handleDelete}
                > 
                  Delete Plant
                </button>}
                {console.log("loggedInUserId", loggedInUserId())}
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                  </span>{" "}
                  Latin Name
                </h4>
                <p>{plant.latinName}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                  </span>{" "}
                  Description
                </h4>
                <p>{plant.description}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                  </span>{" "}
                  {plant.name} Bloom Season
                </h4>
                {plant.seasons.map(season => {
                  return <article key={season.id} className="media">
                    <div className="content">
                      {console.log(season)}
                      <p className="subtitle">
                        {season.season}
                      </p>
                    </div>
                  </article>
                })}
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                  </span>{" "}
                  Attracts
                </h4>
                {plant.pollinators.map(pollinator => {
                  return <article key={pollinator.id} className="media">
                    <div className="content">
                      <p className="subtitle">
                        {pollinator.type}
                      </p>
                    </div>
                  </article>
                })}
                <hr />    
                <h4 className="title is-4">
                  <span role="img" aria-label="globe">
                  </span>{" "}
                  Contributed By
                </h4>
                <hr />
                <p>{plant.user.username}</p>
                <hr />           
              </div>
            </div>
            <h4 className="title is-4">
              Comments:
            </h4>
            {plant.comments && plant.comments.map(comment => {
              return <article key={comment.id} className="media">
                <div className="media-content">
                  <div className="content">
                    {console.log(comment)}

                    <p className="subtitle">
                      {comment.user.username}:
                    </p>
                    <p>{comment.content}</p>
                  </div>
                </div>
              </article>
            })}

            {loggedInUserId() && <article className="media">
              <div className="media-content">
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Make a comment.."
                      value={comments}
                      // ! Set the comment's content to be what's in the input textarea.
                      onChange={(event) => setComments(event.target.value)}
                    >
                    </textarea>
                  </div>
                </div>
                <div className="field">
                  <p className="control">
                    <button
                      className="button is-warning is-light"
                      onClick={handleComment}
                    >
            Submit
                    </button>
                  </p>
                </div>
              </div>
            </article>}
          </div>
        ) : (
          <p>...loading</p>
        )}
      </div>
      <footer className="has-text-left">
        <button className="button is-warning is-light"><Link className="has-text-success-dark"
          to="/plants">🌺 All plants</Link></button>
      </footer>
    </section>
  )
}

export default ShowPlant