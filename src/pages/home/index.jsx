import React from 'react'
import TweetAdd from '../../components/home-comp'
import './styles/styles.scss'


function Home() {
  return (
    <section className="home-section">
      <div className="container">
          <TweetAdd />
      </div>
    </section>
  )
}

export default Home