import React from 'react';

const Deployed = (props) => {
  return (
    <div id="projects-container" className="card">
      {props.description.map((item, index) => (
        <div className="cardFlex" key={index}>
          <div className="gridLeft">
            <h3>{item.name}</h3> <p>{item.description} </p>{' '}
          </div>
          <div className="gridRight">
            <p>{item.tech}</p>
            {item.link2 && item.link2}
            {item.gif && item.gif}
            <a target="_blank" href={item.link} rel="noreferrer">
              <em>Check it out here!</em>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deployed;
