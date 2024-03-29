import './Buttons.scss';

const Button = (props) => {
  return (
    <>
      <button className="button" onClick={props.onClick} id={props.id}>
        {props.text}
      </button>
    </>
  );
};
export default Button;
