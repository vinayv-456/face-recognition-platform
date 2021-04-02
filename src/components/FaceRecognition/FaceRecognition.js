import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
  return (
      <div className='bounding-box'>
        <img id='inputimage' alt='' src={imageUrl} width='300px' heigh='300px'/>
      </div>
  );
}

export default FaceRecognition;