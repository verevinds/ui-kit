import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Input = () => {
  return (
    <div className={'search'}>
      <input className={'search__input'} />
      <button type='button' className={'search__button'}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default Input;
