import React from 'react';

function Tweet({ profilePic, name, username, text }) {
  return (
    <div className="tweet">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div className="tweet-content">
        <div className="user-info">
          <h2 className="name">{name}</h2>
          <p className="username">@{username}</p>
        </div>
        <p className="tweet-text">{text}</p>
        <div className="actions">
          <i className="far fa-heart"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-comment"></i>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
