import React from 'react'
// import { Link } from 'react-router-dom'
// import { baseUrl } from '../config'
import HomePlants from '../components/HomePlants'


function Home() {
  

  return <section className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">        
        <div className="columns is-multiline is-mobile">
          <section className="title-header">
            <div className="flex-header">
              <div className="head-text">
                <div className="text-on-image">
                  <div className="column is-mobile is-two-thirds">
                    <h3 className="title is-1 has-text-centered">...help us create a buzz</h3>
                  </div>
                </div>
                <div className="head-image">           
                  <div className="column is-mobile is-one-third">
                    <img src='https://res.cloudinary.com/dlxbte5xh/image/upload/v1659869556/Project_Pollinator_qfrxk5-c_scale_h_350_mqijxw.png' alt="logo" />
                  </div>
                </div>
              </div> 
            </div>
            <div className="row is-mobile is-full">
              <div className ="head-image">
                <img src = {require('../images/pexels-irina-iriser-1533470.jpg')} alt = "Bee" />
              </div>
            </div>
          </section>
          <div className="box has-text-centered">
            <div className="content is-medium">
              <h3 className="title is-2 has-text-centered">Our Goals</h3>
              <p>Our goals are simple really, we want to create a literal buzz. Our goal is to give everyone the tools and inspiration to set up <a href="https://project-pollinator.netlify.app/nectarcafe">nectar cafes</a> in their gardens, whether you have a sprawling garden or balcony.
               Our reasons? Well we reckon you would have been living under a rock to not know about the rapid decline in the bee population, the rapid decline of butterflies, even the rapid decline of the non-pretty bugs. It is all a bit …<strong>overwhelming and depressing?</strong> <br />
              </p>
            </div>
          </div>           
          <HomePlants />
          <div className="box has-text-centered">
            <div className="content is-medium">
              <h3 className="title is-2 has-text-centered">Our Database</h3>
              <p className="">Another goal is to create a <a href="https://project-pollinator.netlify.app/hivemind">Hive Mind</a>, which is a working database. What is a ‘working database’, you ask. Well, we want to grow (our website, our goals and our impact) and we need your help! In order to collect as much data as possible we ask that everyone register and contribute plants that you know that attract pollinators.
              Once you have set up your nectar cafe, please head over to our Hive Mind and add all the plants you know of! Add comments on other plants, tell us why they are special, tell us the pollinators that love them!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          Project Pollinator by <a href="https://www.linkedin.com/in/robyn-smith-27187910b/">Robyn Smith</a>. The code is open-sourced and hosted on <a href="https://github.com/Robsness23">GitHub</a>.
        </p>
      </div>
    </footer>
  </section>
}

export default Home