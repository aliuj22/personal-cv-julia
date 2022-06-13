import { useState } from 'react';
import './ModalImg.scss';

export default function ModalImg(props) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    console.log(isActive);
    setActive(!isActive);
  };
  return (
    <>
      <img
        className="small"
        src={props.img}
        onClick={toggleClass}
        alt={props.alt}
      />
      {isActive && (
        <dialog
          className="dialog"
          style={{ position: 'absolute' }}
          open
          onClick={toggleClass}
        >
          <img
            className="imageModal"
            src={props.img}
            onClick={toggleClass}
            alt={props.alt}
          />
        </dialog>
      )}
    </>
  );
}
