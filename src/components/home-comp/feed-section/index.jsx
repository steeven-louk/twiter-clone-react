import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles/styles.scss'


function FeedSection({data}) {


  return (
    <section className="feed-section">
      <div className="feed-container">
        <div className="img-profil">
          <img src={data.profil_pic} alt="" />
        </div>
          <div className="tweet-content">
              <div className="header d-flex text-center">
                <h4 className="font-bold text-white text-capitalize">{data.name}</h4>
                <h5 className="text-muted">@{data.slug} </h5>
                <span className="date"> - 23h</span>
              </div>
              <div className="body">
                <p className='desc'>
                  {data.msg}
                </p>
                <img src={data.post_img} alt="" />
                
              </div>
              <div className="footer d-flex justify-content-between">
                <span className='ico-1 ico'>
                <FontAwesomeIcon icon="fa-solid fa-comment" className='icon'/>
                <span className='count'>254</span>
                </span>
                <span className='ico-2 ico'>
                <FontAwesomeIcon icon="fa-solid fa-retweet" className='icon'/>
                <span className='count'>254</span>
                </span>
                <span className='ico-3 ico'>
                <FontAwesomeIcon icon="fa-solid fa-heart" className='icon'/>
                <span className='count'>{data.like}</span>
                </span>
                <span className='ico-4 ico'>
                  <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className='icon'/>
                </span>
              </div>
          </div>
      </div>
      <hr />

    </section> 
  )
}

export default FeedSection