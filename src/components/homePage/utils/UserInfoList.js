import React from 'react';
import UserInfoItem from './UserInfoItem';

// data de l'ul dans la Modal.

const UserInfoList = ({ user }) => {
  const userInfo = [
    {
      icon: 'bi-person',
      content: `${user.name}`,
      link: 'https://github.com/github-john-doe',
    },
    { icon: 'bi-geo-alt', content: user.location || ' ' },
    { icon: 'bi-card', content: `${user.bio}` },
    { icon: 'bi-box', content: `Repositories: ${user.public_repos}` },
    { icon: 'bi-people', content: `Followers: ${user.followers}` },
    { icon: 'bi-people', content: `Following: ${user.following}` },
  ];

  return (
    <ul className="list-unstyled modal-body">
      {userInfo.map((item, index) => (
        <UserInfoItem
          key={index}
          icon={item.icon}
          content={item.content}
          link={item.link}
        />
      ))}
    </ul>
  );
};

export default UserInfoList;
