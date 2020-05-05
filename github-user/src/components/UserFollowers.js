import React, { Fragment } from 'react';

const UserFollowers = props => {
  return (
    <div>
      <h2>{props.follower.login}</h2>
      <img src={props.follower.avatar_url} alt='' />
    </div>
  );
};

export default UserFollowers;
