import React from 'react';
const Button = ({ onClick, children }) => {
  return (
    <div className="button-wrapper">
      <button className="Button" onClick={onClick}>
        {children || 'Load more'}
      </button>
    </div>
  );
};
export default Button;