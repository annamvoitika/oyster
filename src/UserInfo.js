import React, { useState } from 'react';
import './UserInfo.css';

export const UserInfo = (props) => {
  const provider = props.provider;
  const healthProviders = props.healthProviders;
  const [isOpen, setIsOpen] = useState(true);

  const onButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const buttonIcon = () => {
    if (isOpen) {
      return '-';
    }
    return '+';
  };

  return (
    <div className="provider-card">
      <div className="provider">
        <h3 className="provider-name">{provider}</h3>
        <button onClick={onButtonClick}> {buttonIcon()} </button>
      </div>
      {isOpen && healthProviders[provider].map((info) => <li>{info.name}</li>)}
    </div>
  );
};
