import Deployed from './Deployed/Deployed';
import './Experience.scss';

const Experience = (props) => {
  return (
    <div id="experience">
      <h2>PROJECTS</h2>

      <div>
        <Deployed description={props.deployedProjects} />
      </div>
    </div>
  );
};
export default Experience;
