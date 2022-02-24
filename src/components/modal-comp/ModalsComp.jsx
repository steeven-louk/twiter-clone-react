import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/styles.scss'

function ModalsComp() {
 
     
  return (
    <section className="modal-section">
      <div className="container">

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="ModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog p-2">
            <div className="modal-content">
              <div className="modal-header">
                <div className="img-profil">
                    <img src="https://images.pexels.com/photos/7292952/pexels-photo-7292952.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
              </div>

              <form className="form-group">
                <div className="modal-body">
                  <textarea
                    name="tweet"
                    className="form-control"
                    col="30"
                    placeholder="What's happening ?"
                  ></textarea>
                  <hr />

                </div>
                <div className="modal-footer">
                  <div className="action-icon">
                    <FontAwesomeIcon
                      className="icon text-primary"
                      icon="fa-solid fa-image"
                    />
                    <FontAwesomeIcon
                      className="icon text-primary"
                      icon="fa-solid fa-gift"
                    />
                    <FontAwesomeIcon
                      className="icon text-primary"
                      icon="fa-solid fa-square-poll-horizontal"
                    />
                    <FontAwesomeIcon
                      className="icon text-primary"
                      icon="fa-solid fa-face-smile"
                    />
                    <FontAwesomeIcon
                      className="icon text-primary"
                      icon="fa-solid fa-calendar"
                    />
                    <FontAwesomeIcon
                      className="icon text-primary"
                      icon="fa-solid fa-location-dot"
                    />
                  </div>
                  <button type="button" className="btn btn-primary">
                    Tweet
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ModalsComp;
