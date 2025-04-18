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
          <div className="modal-content border-secondary text-bg-dark">
            <div className="modal-header border-secondary">
              <h3 className="modal-title">Mon profil GitHub</h3>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="container p-4">
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
                    <li className="border-bottom border-1 border-secondary p-2">
                      <i className="bi bi-geo-alt me-2"></i>
                      {userGitHub.location}
                    </li>
                    <li className=" border-bottom border-1 border-secondary p-2">
                      <i className="bi bi-card-text me-2"></i>
                      {userGitHub.bio}
                    </li>
                    <li className="border-bottom border-1 border-secondary p-2">
                      <i className="bi bi-box me-2"></i>
                      Repositories: {userGitHub.public_repos}
                    </li>
                    <li className="border-bottom border-1 border-secondary p-2">
                      <i className="bi bi-people me-2"></i>
                      Followers: {userGitHub.followers}
                    </li>
                    <li className="p-2">
                      <i className="bi bi-people me-2"></i>
                      Following: {userGitHub.following}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="modal-footer border-secondary">
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
