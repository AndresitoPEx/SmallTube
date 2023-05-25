import './formNuevaCategoria.css';
import CampoTexto from '../CampoTexto';
import BotonGuardar from '../BotonGuardar';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillCloseCircle, AiFillEdit } from 'react-icons/ai';

const FormularioNuevaCategoria = (props) => {
  const { registrarCategoria, categorias, actualizarCategorias, eliminarCategoria } = props;

  const navigate = useNavigate();
  const nuevaCategoriaRef = useRef(null);

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [color, setColor] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const Cancelar = () => {
    navigate('/');
  };

  const enviarForm = (e) => {
    e.preventDefault();

    if (categoriaSeleccionada === null) {
      registrarCategoria({ nombre, descripcion, colorPrimario: color });
    } else {
      const categoriaActualizada = {
        ...categoriaSeleccionada,
        nombre,
        descripcion,
        colorPrimario: color,
      };
      const categoriasActualizadas = categorias.map((categoria) =>
        categoria.id === categoriaSeleccionada.id ? categoriaActualizada : categoria
      );
      actualizarCategorias(categoriasActualizadas);
    }

    setNombre('');
    setDescripcion('');
    setColor('');
    setCategoriaSeleccionada(null);

    navigate('/crear-categoria');
  };

  const editarCategoria = (categoria) => {
    setNombre(categoria.nombre);
    setDescripcion(categoria.descripcion);
    setColor(categoria.colorPrimario);
    setCategoriaSeleccionada(categoria);
  };

  useEffect(() => {
    if (nuevaCategoriaRef.current) {
      nuevaCategoriaRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [categorias]);

  return (
    <section className="formularioNuevaCategoria">
      <form onSubmit={enviarForm}>
        <h1>{categoriaSeleccionada ? 'Editar Categoría' : 'Agregar Nueva Categoría'}</h1>
        <CampoTexto
          titulo="Nombre de la Categoría"
          placeholder="Nombre de la categoría aquí"
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <CampoTexto
          titulo="Descripción de la Categoría"
          placeholder="Descripción de la categoría aquí"
          required
          valor={descripcion}
          actualizarValor={setDescripcion}
        />
        <CampoTexto
          type="color"
          titulo="Elige el color de la Categoría"
          placeholder="Elige un color aquí"
          required
          valor={color}
          actualizarValor={setColor}
        />
        <div className="button-group">
          <BotonGuardar texto="Guardar" />
          <button type="button" onClick={Cancelar}>
            Cancelar
          </button>
        </div>
      </form>
      <div className="categoria-lista">
        <h2>Categorías Registradas</h2>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">NOMBRE</th>
              <th scope="col">DESCRIPCIÓN</th>
              <th scope="col">EDITAR</th>
              <th scope="col">ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria, index) => (
              <tr key={categoria.id} ref={index === categorias.length - 1 ? nuevaCategoriaRef : null}>
                <td>{categoria.nombre}</td>
                <td>{categoria.descripcion}</td>
                <td>
                  <button className='btn btn-outline-warning' onClick={() => editarCategoria(categoria)}>
                    <AiFillEdit />
                  </button>
                </td>
                <td>
                  <button className='btn btn-outline-danger'>
                    <AiFillCloseCircle onClick={() => eliminarCategoria(categoria.id)} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FormularioNuevaCategoria;
