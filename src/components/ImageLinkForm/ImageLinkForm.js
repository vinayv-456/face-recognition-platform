import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='Discription center'>
        {'This Magic Brain will detect faces in your pictures. Give a try.'}
      </p>
      <div className='center'>
        <div className='form center'>
          <input type='text' className="imageUrl" onInput={onInputChange}/>
          <button
            className='btn'
            onClick={onButtonSubmit}
          >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;