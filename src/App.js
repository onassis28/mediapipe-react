/* eslint-disable react-hooks/exhaustive-deps */

import './App.css';
import {hands} from '@mediapipe/hands'
import * as Hands from '@mediapipe/hands'
import * as cam from '@mediapipe/camera_utils'
import {useRef,useEffect} from 'react'
import Webcam from 'react-webcam'


function App() {
  const webcamRef=useRef(null)
  const canvasRef=useRef(null)
  let camera=null
  function onResults(results){
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;}

  useEffect(()=>{
    const hands1 = new hands({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }})
    hands1.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    hands.onResults(onResults);
    if(typeof webcamRef.current!=='undefined' && webcamRef.current!==null){
      camera = new cam.Camera(webcamRef.current.video,{
        onFrame:async()=>{
await hands1.send({image:webcamRef.current.video})
        }, width:640, height:480})
        camera.start()
      }
    
  },[]);
  return (
    <div>
 <Webcam ref={webcamRef} style={{
position: 'absolute',
marginRight:'auto',
marginLeft:'auto',
left: 0,
right:0,
textAlign: 'center',
zIndex:9,
width:640,
height: 480,

 }}/>

 <canvas ref={canvasRef} style={{
position: 'absolute',
marginRight:'auto',
marginLeft:'auto',
left: 0,
right:0,
textAlign: 'center',
zIndex:9,
width:640,
height: 480,

 }} >
 </canvas>
    </div>
  );
}

export default App;
      