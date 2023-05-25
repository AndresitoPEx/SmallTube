import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './reset.css';
import Header from './components/Header/Header';
import FormularioNuevoVideo from './components/FormNuevoVideo';
import FormularioNuevaCategoria from "./components/FormNuevaCategoria";
import Home from './components/Home';
import HeaderHome from './components/HeaderHome';
import Section from './components/Section';
import Footer from './components/footer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  const [mostrarForm, setMostrarForm] = useState(false);
  const [videos, setVideos] = useState([
    {
      id: uuid(),
      titulo: "Video 1",
      link: "https://www.youtube.com/watch?v=J6qIzKxmW8Y",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 1"

    },
    {
      id: uuid(),
      titulo: "Video 2",
      link: "https://www.youtube.com/watch?v=0R-fFbA737A",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 2"
    },
    {
      id: uuid(),
      titulo: "Video 3",
      link: "https://www.youtube.com/watch?v=aA2IRoPFIn0",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 3"
    },
    {
      id: uuid(),
      titulo: "Video 4",
      link: "https://www.youtube.com/watch?v=SjYecEQFL0U",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 4"
    },
    {
      id: uuid(),
      titulo: "Video 5",
      link: "https://www.youtube.com/watch?v=ygdVEIrVnIk",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Favoritos",
      descripcion: "Este es el video 5"
    },

    {
      id: uuid(),
      titulo: "Video 1",
      link: "https://www.youtube.com/watch?v=J6qIzKxmW8Y",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Entretenimiento",
      descripcion: "Este es el video 1"

    },
    {
      id: uuid(),
      titulo: "Video 2",
      link: "https://www.youtube.com/watch?v=0R-fFbA737A",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Entretenimiento",
      descripcion: "Este es el video 2"
    },
    {
      id: uuid(),
      titulo: "Video 3",
      link: "https://www.youtube.com/watch?v=aA2IRoPFIn0",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Entretenimiento",
      descripcion: "Este es el video 3"
    },
    {
      id: uuid(),
      titulo: "Video 4",
      link: "https://www.youtube.com/watch?v=SjYecEQFL0U",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Entretenimiento",
      descripcion: "Este es el video 4"
    },
    {
      id: uuid(),
      titulo: "Video 5",
      link: "https://www.youtube.com/watch?v=ygdVEIrVnIk",
      imagen: "https://i.ytimg.com/vi/7C2z4GqqS5E/maxresdefault.jpg",
      categoria: "Entretenimiento",
      descripcion: "Este es el video 5"
    },
  ]);

  const [categorias, setCategorias] = useState(
    [
      {
        id: uuid(),
        nombre: "Favoritos",
        colorPrimario: "#cce5ff",
        descripcion: "Videos favoritos"
      },
      {
        id: uuid(),
        nombre: "Entretenimiento",
        colorPrimario: "#a3ffac",
        descripcion: "Videos de entretenimiento"
      },
      {
        id: uuid(),
        nombre: "Educación",
        colorPrimario: "#ffca99",
        descripcion: "Videos de educación"
      },
      {
        id: uuid(),
        nombre: "Tecnología",
        colorPrimario: "#eaffc2",
        descripcion: "Videos de tecnología"
      },
      {
        id: uuid(),
        nombre: "Música",
        colorPrimario: "#ff8097",
        descripcion: "Videos de música"
      }
    ]
  )

  const actualizarCategorias = (nuevasCategorias) => {
    setCategorias(nuevasCategorias);
  };


  const cambiarEstado = () => {
    setMostrarForm(!mostrarForm);
  }

  //Registrando videos
  const registrarVideo = (e) => {
    setVideos([...videos, e]);
  }


  //Registrando Categorias
  const registrarCategoria = (categoriaNueva) => {
    actualizarCategorias([...categorias, {...categoriaNueva, id: uuid()}]);
    
  }

  //eliminar video
  const eliminarVideo = (id) => {
    const newVideos = videos.filter((video) => video.id !== id);
    setVideos(newVideos);
  }

  //eliminar Categoria
  const eliminarCategoria = (id) => {
    
    const newCategorias = categorias.filter((categoria) => categoria.id !== id);
    actualizarCategorias(newCategorias);
  }



  return (
    <div className="App">
      <Router>
        <Header cambiarEstado={cambiarEstado} />
        <Routes>

          <Route path="/" element={
            <>
              <Home />
              <HeaderHome videos={videos}/>
              {categorias.map((categoria, index) => (
                <Section
                  datos={categoria}
                  key={categoria.nombre}
                  nombre={categoria.nombre}
                  color={categoria.colorPrimario}
                  videos={videos.filter(
                    (video) => video.categoria === categoria.nombre
                  )}
                  eliminarVideo={eliminarVideo}
                />
              ))}
            </>
          } />

          <Route path="/nuevo-video" element={<FormularioNuevoVideo
            categorias={categorias.map((categoria) => categoria.nombre)}
            registrarVideo={registrarVideo}
          />} 
          />
          <Route path="/crear-categoria" element={
          <FormularioNuevaCategoria
            categorias={categorias}
            registrarCategoria={registrarCategoria}
            actualizarCategorias={actualizarCategorias} 
            eliminarCategoria = {eliminarCategoria}
            />} 
            
            />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
