import Pacients from "./Pacients"
import { useEffect } from "react"

export const PacientList = ({ pacients, setPacient, eliminarPaciente }) => {

    const thereIsPacient = pacients && pacients.length

    return (

        <div className="md:w-1/2 lg:w-3/5 h-screen mr-2 vsm:mt-10 sm:mt-0 ">
            {thereIsPacient ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
                    <p className="text-center my-5 text-lg">Administra tus {' '}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay ningun paciente</h2>
                    <p className="text-center my-5 text-lg">Comienza a agregarlos {' '}
                        <span className="text-indigo-600 font-bold">se veran aqui</span>
                    </p>
                </>

            )}

            <div className="h-screen lg:overflow-y-auto md:overflow-y-auto">
                {pacients.map(pacient =>
                    <Pacients
                        key={pacient.id}
                        pacient={pacient}
                        setPacient={setPacient}
                        eliminarPaciente={eliminarPaciente}
                    />
                )}
            </div>
        </div>
    )
}
