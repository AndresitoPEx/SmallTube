
import './formularioNuevoVideo.css'
import CampoTexto from '../CampoTexto'
import Categorias from '../Categorias'
import BotonGuardar from '../BotonGuardar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';




const FormularioNuevoVideo = (props) => {

    const handleCancelar = () => {
        navigate('/');
    };

    const [titulo, setTitulo] = useState("")
    const [link, setLink] = useState("")
    const [imagen, setImagen] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")


    const { registrarVideo } = props;

    const navigate = useNavigate();



    const enviarForm = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            titulo: titulo,
            link: link,
            imagen: imagen,
            categoria: categoria,
            descripcion: descripcion
        }
        registrarVideo(datosAEnviar);
        navigate('/');
    }

    return (
        <section className="formularioNuevoVideo">
            <form onSubmit={enviarForm}>
                <h1>Agregar Nuevo Video</h1>
                <CampoTexto
                    titulo="Titulo"
                    placeholder="Titulo del video aqui"
                    required
                    valor={titulo}
                    actualizarValor={setTitulo} />
                <CampoTexto
                    titulo="Link del Video"
                    placeholder="Tu video aqui"
                    required
                    valor={link}
                    actualizarValor={setLink}
                />
                <CampoTexto
                    titulo="Link de Imagen"
                    placeholder="La foto del video aqui"
                    required
                    valor={imagen}
                    actualizarValor={setImagen}
                />
                <Categorias
                    valor={categoria}
                    actualizarValor={setCategoria}
                    categoria={props.categorias}
                />
                <CampoTexto
                    titulo="Descripcion"
                    placeholder="Descripcion aqui"
                    required
                    valor={descripcion}
                    actualizarValor={setDescripcion}
                />

                <div className='three-buttons'>
                    <div className="button-group">
                        <BotonGuardar texto="Guardar" />
                        <button type="button" onClick={handleCancelar}>Cancelar</button>
                    </div>
                    <Link className='crear-categoria' to="/crear-categoria">Crear Categoría</Link>
                </div>
            </form>
        </section>
    )
}

export default FormularioNuevoVideo