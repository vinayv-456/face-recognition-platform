import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ name, onInputChange, onButtonSubmit, score }) => {
  return (
    <div>
      <p className='Discription center'>
        {`Hello ${name}, This Magic Brain will detect faces in your pictures. Give a try.`}
      </p>
      <h1 style={{textAlign: 'center', fontWeight:'normal'}}>score: {score}</h1>
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