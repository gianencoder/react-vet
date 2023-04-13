import { useState, useEffect } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { PacientList } from "./components/PacientList"

function App() {
  const [pacients, setPacients] = useState(JSON.parse(localStorage.getItem('pacients')) ?? []);
  const [pacient, setPacient] = useState({});

  useEffect(() => {
    localStorage.setItem('pacients', JSON.stringify(pacients));
  }, [pacients])



  const eliminarPaciente = id => {
    const updatedPacient = pacients.filter(pacient => pacient.id !== id);
    setPacients(updatedPacient);
  }




  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacients={pacients}
          setPacients={setPacients}
          pacient={pacient}
          setPacient={setPacient}
        />
        <PacientList
          pacients={pacients}
          setPacient={setPacient}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App
