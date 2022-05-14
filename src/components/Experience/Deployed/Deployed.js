import React from 'react';

const Deployed = (props) => {
  return (
    <div id="projects-container" className="card">
      {props.description.map((item, index) => (
        <div className="cardFlex" key={index}>
          <div className="gridLeft">
            <h3>{item.name}</h3>{' '}
            <p className="gridLeft__description">{item.description} </p>{' '}
          </div>
          <div className="gridRight">
            {item.gif && item.gif}
            {/* {item.link2 && item.link2} */}
            <p>{item.tech}</p>

            {item.link2 ? (
              <>
                {' '}
                <a
                  target="_blank"
                  href={item.link}
                  rel="noreferrer"
                  className="gridRight__link"
                >
                  {' '}
                  <em>Frontend code</em>{' '}
                </a>{' '}
                <br />
                <a
                  target="_blank"
                  href={item.link2}
                  rel="noreferrer"
                  className="gridRight__link"
                >
                  {' '}
                  <em>Backend code</em>{' '}
                </a>
              </>
            ) : (
              <a
                target="_blank"
                href={item.link}
                rel="noreferrer"
                className="gridRight__link"
              >
                {' '}
                <em>Check it out here!</em>{' '}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Deployed;
