import React, { useState } from 'react';
import Button from './Buttons/Buttons';
import Deployed from './Deployed/Deployed';
import './Experience.scss';

const Experience = (props) => {
  const [deployed, setDeployed] = useState(props.deployedProjects);
  const [notDeployed, setNotDeployed] = useState(props.notDeployedProjects);

  const [description, setDescription] = useState([]);

  const showProjects = (e) => {
    console.log(e);
    setDescription(e);
  };

  return (
    <div id="experience">
      <h2>PROJECTS</h2>
      <Button
        id={'btn-deployed'}
        text={'DEPLOYED'}
        onClick={(e) => {
          e.preventDefault();
          showProjects(deployed);
        }}
      />
      <Button
        id={'btn-not-deployed'}
        text={'NOT DEPLOYED'}
        onClick={(e) => {
          e.preventDefault();
          showProjects(notDeployed);
        }}
      />
      <div>
        <Deployed description={description} />
      </div>
    </div>
  );
};
export default Experience;
