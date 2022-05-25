
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

  useEffect(()=>{
    const hands1 = new hands({locateFile: (file) => {
      return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    }});
  })
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
      