import React from 'react';
import Button from '../global/Button';
import './style/home.css';
import useGitHubUser from './utils/useGitHubUser';
import UserInfoList from './utils/UserInfoList';

const Modal = ({ onClose }) => {
  const userGitHub = useGitHubUser();

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
                  <img className="img-fluid" src={userGitHub.avatar_url} alt="avatar" />
                </div>
                <div className="col-md-6">
                  <UserInfoList user={userGitHub} />
                </div>
              </div>
            </div>
            <div className="modal-footer border-secondary">
              <Button color="secondary" data-bs-dismiss="modal" onClick={onClose}>
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
