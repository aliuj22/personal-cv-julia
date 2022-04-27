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
            {item.gif && item.gif}
            <a target="_blank" href={item.link} rel="noreferrer">
              {item.gif ? (
                <em>Click here or the gif to see it on GitHub.</em>
              ) : (
                <em>Check it out here!</em>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Deployed;