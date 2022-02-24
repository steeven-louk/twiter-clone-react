import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './styles/styles.scss'
import { Link } from 'react-router-dom'
import ModalsComp from '../modal-comp/ModalsComp';

function LeftComp() {

  const [modal, setModal] = useState(false);

  const modalpop = () =>{
    try {
      setModal(true)
    } catch (err) {
      console.warn('mess :', err)
    }
  }


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
            <Link to='/profil' className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-user" />profile</Link>
            <span className="nav-link text-white text-capitalize"><FontAwesomeIcon className='icon' icon="fa-solid fa-ellipsis"/>more</span>
            <button onClick={()=> modalpop() } data-bs-toggle="modal" data-bs-target="#exampleModal" type='button' className="btn btn-primary text-white text-capitalize text-center btn-tweet">tweet</button>
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

        {modal? <ModalsComp /> : ''}
    </section>
    
  )
}

export default LeftComp