import React, { useEffect, useState } from 'react';
import './FaceRecognition.css';
import axiosInstance from '../../apis/client'


const FaceRecognition = ({ imageUrl }) => {
  const [boundaryInfo, setBoundaryInfo] = useState({}) 
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    if(imageUrl)
    {
      setLoading(true)
      console.log("immmmage")
      axiosInstance.get('/fr-image', {
        params:{
          imageUrl: imageUrl
        }})
      .then(res=>{
        console.log("rws", res.data)
        setBoundaryInfo(res.data)
        setLoading(false)
      })
    }
  }, [imageUrl])
  
  return (
      <div className='bounding-box'>
        {
          imageUrl
          ?
          <div style={{ position:'relative'}}>
          <img id='input-image' alt='' src={imageUrl} width='300px' height='300px'/>
          {
            Object.keys(boundaryInfo).length!==0 && !loading &&
            <div id="face-frame" style={{
              left: (boundaryInfo?.left_col)*300+'px',
              top: (boundaryInfo?.top_row)*300+'px',
              width:(boundaryInfo?.right_col - boundaryInfo?.left_col)*300+'px',
              height:(boundaryInfo?.bottom_row - boundaryInfo?.top_row)*300+'px'}}
            />
          }
          </div>
          :
          <div id="image-placeholder">
            Image
          </div>
        }
        
      </div>
  );
}

export default FaceRecognition;