import React from 'react';

function PostItemAPI(props) {
  const {id, user, type, tags, webformatURL} = props.apost;
  const artwork = `Artwork type: ${type}`;
  const auser = `Artist: ${user}`;
  const atag = `Tags: ${tags}`;

  return (
    <div key={id}>
        <input type='text' name='artist' placeholder={auser} />
        <br />
        <img src={webformatURL} alt='some image'/>
        <p>{atag}</p>
        <br />
    </div>
  )
}

export default PostItemAPI
