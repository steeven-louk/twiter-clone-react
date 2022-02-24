import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Watch } from 'react-loader-spinner'
import FeedSection from '../../components/home-comp/feed-section'
import TweetAdd from '../../components/home-comp/tweetAdd'
import './styles/styles.scss'


function Home() {

  const url = 'https://retoolapi.dev/2AteKd/data_feed';
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

const getData = async () =>{
  try {
    const fetchData = await axios.get(url);
    
      console.log(fetchData.data);
      setData(fetchData.data);
      setLoading(true);
  } catch (error) {
    console.log('====================================');
    console.log('message: ', error);
    console.log('====================================');
  }
}


  
  useEffect(() => {
    
    getData();
    
  }, []);

  return (
    <section className="home-section"> 
      <div className="container">
          <TweetAdd />
          <hr />
          <div>
          {loading? data.slice(0,25).map((response)=>{
            return(
              <FeedSection key={response.id} data={response}/>
            )
          })
          : 
          (
            <div className="loading">

              <Watch
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
              />
            </div>
          )}
          </div>
      </div>
    </section>
  )
}

export default Home