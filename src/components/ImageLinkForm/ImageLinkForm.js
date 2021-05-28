import React from 'react';
import { connect } from 'react-redux';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit, name, score }) => {
  return (
    <div>
      <p className='Discription center'>
        {`Hello ${name}, This Magic Brain will detect faces in your pictures. Give a try.`}
      </p>
      <p style={{textAlign: 'center', fontWeight:'normal', fontSize:'1.5em'}}>score: {score}</p>
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