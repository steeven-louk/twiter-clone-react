import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './styles/styles.scss'
import TabsProfil from '../../components/TabsProfil'

function Profil() {
  return (
    <section className="profil-section">
      <div className="container-img">
        <div className="img-bg">
        <div className="img-profil"></div>
        </div>
        <div className="profil">
            
            <h5 className="edit text-white btn">Editer le profil</h5>
            
            <div className="profil-body d-flex flex-column">
                <h4 className="name font-weigth-bold text-white text-capitalize">voici le nom</h4>
                <h5 className="subName text-muted">@Voici</h5>
                <div className="date d-flex">
                  <FontAwesomeIcon icon="fa-solid fa-bookmark" />
                  <h5 className="text-muted">inscrit en janvier 2020</h5>
                </div>
                <div className="stat">
                  <span>
                    <b className='text-white'>3</b> suite
                  </span>
                  <span className='m-3'>
                    <b className='text-white'>0</b> abonnés
                  </span>
                </div>
            </div>
        </div>
      </div><br />

      <TabsProfil/>
    </section>
  )
}

export default Profil