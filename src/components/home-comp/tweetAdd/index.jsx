import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './styles/styles.scss'


function TweetAdd() {
  return (
    <section className="tweet-section d-flex">
        <div className="img-profil">
            <img src="https://place-hold.it/300" alt="" />
        </div>
        <div className="add-tweet">
            <form action="" className='form-group'>
                <textarea name="tweet" className='form-control' col='30' placeholder="What's happening ?" ></textarea>
                <hr />
                <div className="footer d-flex justify-content-between">
                    <div className="action-icon">
                        <FontAwesomeIcon className='icon text-primary' icon="fa-solid fa-image" />
                        <FontAwesomeIcon className='icon text-primary' icon="fa-solid fa-gift" />
                        <FontAwesomeIcon className='icon text-primary' icon="fa-solid fa-square-poll-horizontal" />
                        <FontAwesomeIcon className='icon text-primary' icon="fa-solid fa-face-smile" />
                        <FontAwesomeIcon className='icon text-primary' icon="fa-solid fa-calendar" />
                        <FontAwesomeIcon className='icon text-primary' icon="fa-solid fa-location-dot" />

                    </div>
                    <div className="btn btn-primary text-white">Tweet</div>
                </div>
            </form>
        </div>
    </section>
    
  )
}

export default TweetAdd