import ReactPlayer from 'react-player';
import './headerHome.css';

const HeaderHome = ({ videos }) => {
  const ultimoVideo = videos.length > 0 ? videos[videos.length - 1] : null;

  return (
    <section className="header-home">
      <div className="info-header">
        <button>Último visto</button>
        {ultimoVideo && <h3>{ultimoVideo.titulo}</h3>}
        {ultimoVideo && <p>{ultimoVideo.descripcion}</p>}
      </div>
      {ultimoVideo && (
        <ReactPlayer
          url={ultimoVideo.link}
          width="50%"
          controls
        />
      )}
    </section>
  );
};

export default HeaderHome;
