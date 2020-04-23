import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img props={props.url} alt=""/>
  </li>
);

export default Gif;