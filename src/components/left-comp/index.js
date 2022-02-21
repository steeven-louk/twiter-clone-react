import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles/styles.scss'

function LeftComp() {
  return (
    <section className="left-section">
        <div className="container">

          <nav className="nav justify-content-center d-flex flex-column">
          
            <span className="nav-link"><FontAwesomeIcon icon="fa-brands fa-twitter" className='icon'/></span>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-house-user" />  Home</span>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-hashtag" />explore</span>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-bell" />notification</span>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-envelope" />messages</span>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-bookmark" />bookmarks</span>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-list" />lists</span>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-user" />profile</span>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-ellipsis"/>more</span>
            <a href="/" className="btn btn-primary text-white text-capitalize text-center btn-tweet">tweet</a>
          </nav>
          <div className="footer">
            <a href="/" className="btn d-flex">
              <div className="img-profil">
                <img src="https://place-hold.it/300" alt="" />
              </div>
              <div className="profil d-flex flex-column">
                <span className="font-weight-bold text-white text-capitalize">jhon doe</span>
                <span className="text-muted">@johnDoe</span>
              </div>
              <FontAwesomeIcon icon="fa-solid fa-ellipsis" className='pull-right'/>

            </a>
          </div>
        </div>
    </section>
    
  )
}

export default LeftComp