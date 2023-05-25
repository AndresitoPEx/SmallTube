import ReactPlayer from 'react-player';
import './videoHome.css'
import { AiFillCloseCircle } from 'react-icons/ai';


const VideoHome = (props) => {

    const { titulo, link, imagen, categoria, descripcion, id } = props.datos;
    const { colorPrimario, eliminarVideo } = props;

    return <div className='video-home'
        style={{ border: `5px ${colorPrimario} solid` }}>
            <AiFillCloseCircle className='eliminar' onClick={ ()=>eliminarVideo(id) } />
        <ReactPlayer
            url={link}
            controls={false}
            width='100%'
            height='100%'
            className="player"
        />

    </div>
}

export default VideoHome