import React from 'react';

const Deployed = (props) => {
  console.log(props.description, 'from deployed');
  return (
    <div>
      <ul id="projects-container">
        {props.description.map((item, index) => (
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

export default Deployed;
