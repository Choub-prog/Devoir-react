import React, { useState, useEffect } from 'react';
import Button from '../global/Button';
import { NavLink } from 'react-router-dom';

const Modal = ({ onClose }) => {
  const [userGitHub, setUserGitHub] = useState([]);
  const getGitHub = async () => {
    const res = await fetch('https://api.github.com/users/github-john-doe');
    const json = await res.json();
    setUserGitHub(json);
  };

  useEffect(() => {
    getGitHub();
  }, []);

  return (
    <div className="modal show d-block" index="-1">
      {userGitHub ? (
        <div className="modal-dialog modal-lg">
          <div className="modal-content text-bg-dark">
            <div className="modal-header">
              <h3 className="modal-title">Mon profil GitHub</h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="container p-5">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="img-fluid"
                    src={userGitHub.avatar_url}
                    alt="avatar"
                  />
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled modal-body">
                    <li className="border-bottom border-1 border-secondary p-2">
                      <i className="bi bi-person me-2 icon-light"></i>
                      <NavLink to="https://github.com/github-john-doe">
                        {userGitHub.name}
                      </NavLink>
                    </li>
                    <li className="bi bi-geo-alt border-bottom border-1 border-secondary p-2">
                      {userGitHub.location}
                    </li>
                    <li className="bi bi-card-text border-bottom border-1 border-secondary p-2">
                      {userGitHub.bio}
                    </li>
                    <li className="bi bi-box border-bottom border-1 border-secondary p-2">
                      Repositories: {userGitHub.public_repos}
                    </li>
                    <li className="bi bi-people border-bottom border-1 border-secondary p-2">
                      Followers:
                      {userGitHub.followers}
                    </li>
                    <li className="bi bi-people border-bottom border-1 border-secondary p-2">
                      Following: {userGitHub.following}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Button
                color="secondary"
                data-bs-dismiss="modal"
                onClick={onClose}
              >
                Fermer
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
};

export default Modal;
