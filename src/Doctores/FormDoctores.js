import { useState } from "react";
import APIInvoke from "../utils/APIInvoke";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const FormDoctores = () => {

    const navigate = useNavigate();

    const doctorInicial = {
        nombres: '',
        apellidos: '',
        documento: '',
        especialidad: '',
        direccion: '',
        telefono: '',
        correo: ''
    };

    const [doctor, setDoctor] = useState(doctorInicial);

    const onChange = (e) => {
        setDoctor({
            ...doctor,
            [e.target.name]: e.target.value
        })
    }
    
    const { nombres,apellidos,documento,especialidad,direccion,telefono,correo } = doctor;

    const crearDoctor = async () => {
        const data = {
            nombres: doctor.nombres,
            apellidos: doctor.apellidos,
            documento: doctor.documento,
            especialidad: doctor.especialidad,
            direccion: doctor.direccion,
            telefono: doctor.telefono,
            correo: doctor.correo
        }
        
        const response = await APIInvoke.invokePOST(`/doctores`, data);
        const doctorId = response._id;

        if (doctorId === '') {
            const msg = "El doctor no fue creado correctamente.";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        } else {
            navigate("/doctores");
            const msg = "El doctor fue creado correctamente.";
            swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });

            setDoctor(doctorInicial)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearDoctor();
    }

    return (
        <div className="container mt-3">
            <h3>Registro de Doctores</h3>
            <form className="container" onSubmit={onSubmit}>
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="nombre">Nombres *</label>
                        <input className="form-control" 
                               type="text" 
                               name="nombres" 
                               id="nombres" 
                               value={nombres} onChange={onChange}
                               required/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="apellidos">Apellidos *</label>
                        <input className="form-control" type="text" name="apellidos" id="apellidos" required value={apellidos} onChange={onChange}/>

                    </div>
                    <div className="col-4">
                        <label htmlFor="documento">Documento *</label>
                        <input className="form-control" type="text" name="documento" id="documento" required value={documento} onChange={onChange}/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="especialidad">Especialidad *</label>
                        <select className="form-select" type="text" name="especialidad" id="especialidad" required value={especialidad} onChange={onChange}>
                            <option value=""></option>
                            <option value="Medico General">Medico General</option>
                            <option value="Ginecologo">Ginecologo</option>
                            <option value="Pediatra">Pediatra</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="direccion">Dirección *</label>
                        <input className="form-control" type="text" name="direccion" id="direccion" required value={direccion} onChange={onChange}/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="telefono">Telefono *</label>
                        <input className="form-control" type="text" name="telefono" id="telefono" required value={telefono} onChange={onChange}/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="correo">Correo *</label>
                        <input className="form-control" type="text" name="correo" id="correo" required value={correo} onChange={onChange}/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="d-flex flex-row-reverse">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default FormDoctores;