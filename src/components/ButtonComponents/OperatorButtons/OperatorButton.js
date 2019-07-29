import React from "react";

const OperatorButton = (props) => {
  const buttonContent = props;

  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className='operatorButton'>{buttonContent}</button>

    </>

  );
};
export default OperatorButton;