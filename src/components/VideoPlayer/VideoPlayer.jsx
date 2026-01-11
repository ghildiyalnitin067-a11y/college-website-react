import React ,{useRef} from 'react'
import './VideoPlayer.css'
import video from '../../assets/USAR.mp4'

const VideoPlayer = ({playstate,setPlayState}) => {
     const player = useRef(null);
     const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
     }

  return (
    <div className = {`video-player ${playstate?'':'hidden-video'} `} ref={player} onClick={closePlayer}>
        <video src={video} muted autoPlay controls></video>
      
    </div>
  )
}

export default VideoPlayer
 