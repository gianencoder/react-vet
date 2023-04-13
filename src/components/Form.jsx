import { useState, useEffect } from 'react'
import ErrorMsg from '../assets/ErrorMsg';
import { HiOutlineCalendar } from "react-icons/hi";


export const Form = ({ pacients, setPacients, pacient, setPacient }) => {

    const [pet, setPet] = useState('');
    const [owner, setOwner] = useState('');
    const [tel, setTel] = useState('');
    const [date, setDate] = useState('');
    const [syntom, setSyntom] = useState('');



    useEffect(() => {
        if (Object.keys(pacient).length > 0) {
            setPet(pacient.pet)
            setOwner(pacient.owner)
            setTel(pacient.tel)
            setDate(pacient.date)
            setSyntom(pacient.syntom)
        }
    }, [pacient])


    const generateId = () => {
        const random = Math.random().toString(36).substring(2)
        const randomDate = Date.now().toString(36)
        return random + randomDate;
    }

    const [errorMsg, setErrorMsg] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if ([pet, owner, tel, date, syntom].includes('')) {
            setErrorMsg(true);
        } else {
            setErrorMsg(false);

            //Object pacient
            const objectPacient = {
                pet,
                owner,
                tel,
                date,
                syntom,

            }

            if (pacient.id) {
                objectPacient.id = pacient.id
                const updatedPacient = pacients.map(pacientState => pacientState.id === pacient.id ? objectPacient : pacientState)
                setPacients(updatedPacient)
                setPacient({})

            } else {
                objectPacient.id = generateId()
                setPacients([...pacients, objectPacient])



            }
            setPet('')
            setOwner('')
            setTel('')
            setDate('')
            setSyntom('')


        }

    };

    return (
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
            <h2 className='font-black text-3xl text-center'>Seguimiento pacientes</h2>
            <p className='text-lg my-5 text-center'>Añade pacientes y {' '} <span className='text-indigo-600 font-bold'>Administralos</span></p>

            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-xl py-10 px-5'>
                {errorMsg && <ErrorMsg ><p>Todos los campos son obligatorios</p> </ErrorMsg>}
                <div className='mb-5'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="petName" >NOMBRE Mascota</label>
                    <input type="text" name="petName" id="petName" placeholder='Nombre de la mascota' className='border-2 mt-2 w-full p-2 rounded-md' value={pet} onChange={(e) => setPet(e.target.value)} />
                </div>

                <div className='mb-5'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="propName" >nombre del propietario</label>
                    <input type="text" name="propName" id="propName" placeholder='Nombre del propietario' className='border-2 mt-2 w-full p-2 rounded-md' value={owner} onChange={(e) => setOwner(e.target.value)} />
                </div>

                <div className='mb-5'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="tel" >tel</label>
                    <input type="text" name="tel" id="tel" placeholder='Telefono de contacto' className='border-2 mt-2 w-full p-2 rounded-md' value={tel} onChange={(e) => setTel(e.target.value)} />
                </div>

                <div className='mb-5'>
                    <label className=' uppercase font-bold text-gray-700 ' htmlFor="date" > Alta  </label>
                    <input type="date" name="date" id="date" className='flex bg-white h-12 mt-2 border-2 rounded-md w-[296px] sm:w-full' value={date} onChange={(e) => setDate(e.target.value)} /><HiOutlineCalendar className='w-5 mt-[-35px] ml-[274px] sm:hidden' />

                </div>

                <div className='mb-5'>
                    <label className='block uppercase font-bold text-gray-700' htmlFor="syntom" >Sintomas</label>
                    <textarea name="syntom" id="syntom" className='border-2 w-full placeholder-gray-400 p-2 mt-2 rounded-md ' placeholder='Describe los sintomas de la mascota' value={syntom} onChange={(e) => setSyntom(e.target.value)} />
                </div>
                <input type="submit" value={pacient.id ? 'Editar mascota' : 'Agregar mascota'} className='bg-indigo-500 w-full p-3 rounded-lg text-white uppercase hover:bg-indigo-600 cursor-pointer hover:font-bold hover:shadow-xl transition-all' />
            </form>
        </div >

    )
}
