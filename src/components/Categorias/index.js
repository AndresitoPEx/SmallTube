import './categorias.css'

const Categorias = (props) => {


    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className='categorias'>
        <label>Categorias</label>
        <select value={props.valor} onChange={manejarCambio} >
            <option value="" disable defaultValue="" hidden >Seleccione una categoria</option>
            {
                props.categoria.map((categoria, index) => <option key={index} value={categoria}>{categoria}</option>)
            }
        </select>
    </div>

}

export default Categorias;