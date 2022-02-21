import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles/styles.scss'

function RightComp() {
  return (
    <section className="right-section">
        <div className="container right-container">
            <div className="trend d-flex justify-content-between pb-3 text-center">
              <h3 className="title font-weight-bold text-white">Trends for you</h3>
              <FontAwesomeIcon icon="fa-solid fa-gear" className='font-weight-bold text-white'/>
            </div>

            <div className="trend-container mb-3">
              <span className="title-trends text-muted text-capitalize">
                trending in france
              </span>
              <h5 className="text-capitalize text-white font-weight-bold">grand est</h5>
              <div className="tweet">
                <span className="text-muted">29K Tweets</span>
              </div>
            </div>

            <div className="trend-container mb-3">
              <span className="title-trends text-muted text-capitalize">
                trending in france
              </span>
              <h5 className="text-capitalize text-white font-weight-bold">grand est</h5>
              <div className="tweet">
                <span className="text-muted">29K Tweets</span>
              </div>
            </div>

            <div className="trend-container mb-3">
              <span className="title-trends text-muted text-capitalize">
                trending in france
              </span>
              <h5 className="text-capitalize text-white font-weight-bold">grand est</h5>
              <div className="tweet">
                <span className="text-muted">29K Tweets</span>
              </div>
            </div>

            <div className="trend-container mb-3">
              <span className="title-trends text-muted text-capitalize">
                trending in france
              </span>
              <h5 className="text-capitalize text-white font-weight-bold">grand est</h5>
              <div className="tweet">
                <span className="text-muted">29K Tweets</span>
              </div>
            </div>
          <a href="/">Show more</a>
        </div>
    </section>
  )
}

export default RightComp