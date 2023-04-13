import { useEffect } from "react";
import { Form } from "./Form";
const Pacients = ({ pacient, setPacient, eliminarPaciente }) => {

    const { pet, owner, tel, date, syntom, id } = pacient

    const handleEliminar = () => {
        const respuesta = confirm('Desea eliminar este paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (

        <div className="mx-5 bg-white shadow-md px-5 py-10 mb-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
                <span className="font-normal normal-case">{pet}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
                <span className="font-normal normal-case ">{owner}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Tel:{' '}
                <span className="font-normal normal-case ">{tel}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Alta:{' '}
                <span className="font-normal normal-case ">{date}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas:{' '}
                <span className="font-normal normal-case ">{syntom}</span>
            </p>

            <div className=" space-x-3">
                <button className=" bg-indigo-400 py-1 px-5 rounded-xl text-white  mt-5 shadow-lg hover:bg-indigo-600 hover:font-bold uppercase" onClick={() => setPacient(pacient)}>Edit</button>
                <button className=" bg-red-400 py-1 px-5 rounded-xl text-white  mt-5 shadow-lg hover:bg-red-600 hover:font-bold uppercase" onClick={handleEliminar}>Delete</button>
            </div>

        </div>
    )
}

export default Pacients