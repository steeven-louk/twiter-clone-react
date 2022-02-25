import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import React, { useState } from 'react'
import './styles/styles.scss'


function TweetAdd({data}) {

    const [tweet, setTweet] = useState('');
    
    const url = "https://retoolapi.dev/2AteKd/data_feed"
    console.log('====================================');
    console.log(tweet);
    console.log('====================================');


  return (
    <section className="tweet-section d-flex">
        <div className="img-profil">
            <img src="https://place-hold.it/300" alt="" />
        </div>
        <div className="add-tweet">
            <form action="" className='form-group'>
                <textarea name="tweet" value={tweet} onChange={(e)=> setTweet(e.target.value)} className='form-control' col='30' placeholder="What's happening ?" ></textarea>
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