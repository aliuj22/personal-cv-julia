import React from 'react';
import './Experience.scss';

const Experience = (props) => {
  return (
    <div id="experience">
      <ul>
        {props.projects.map((item, index) => (
          <li key={index}>
            <hr />
            <h3>{item.name}</h3> <p>{item.description} </p>{' '}
            <a target="_blank" href={item.link} rel="noreferrer">
              Check it out here!
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Experience;
