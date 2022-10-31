const FormPacientes = () => {
    return (
        <div className="container mt-3">
            <h3>Registro de Pacientes</h3>
            <form className="container" action="">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="nombrecompleto">Nombres *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="nombrecompleto">Apellidos *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>
                    
                    <div className="col-4">
                        <label htmlFor="tipo">Tipo de Identificación *</label>
                        <select className="form-select" type="text" name="tipo" id="tipo" required>
                            <option value=""></option>
                            <option value="Cedula">Cedula</option>
                            <option value="Cedula extranjería">Cedula extranjería</option>
                            <option value="Pasaporte">Pasaporte</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="documento">Numero de Identificación *</label>
                        <input className="form-control" type="text" name="documento" id="documento" placeholder="Ingrese documento"/>
                    </div>

                    <div className="col-4">
                        <label htmlFor="nombrecompleto">Motivo de Consulta *</label>
                        <select className="form-select" type="text" name="tipo" id="tipo" required>
                            <option value=""></option>
                            <option value="Medico General">Medico General</option>
                            <option value="Medico Especialista">Medico Especialista</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="nombrecompleto">Correo Electronico *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>

                    <div className="col-4">
                        <label htmlFor="nombrecompleto">Celular *</label>
                        <input className="form-control" type="text" name="nombrecompleto" id="nombrecompleto" required/>
                    </div>            
                </div>
                <div className="row">
                    <div className="d-flex flex-row-reverse">
                        <button type="button" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormPacientes;