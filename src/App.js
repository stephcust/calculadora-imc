import React, { useState } from 'react';
import FormAltura from './components/FormAltura';
import FormPeso from './components/FormPeso';
import Tabela from './components/Tabela';
import Calcular from './components/Calcular';
import Resultado from './components/Resultado';


function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <>
      <FormPeso p={peso} sp={setPeso}/>
      <FormAltura a={altura} sa={setAltura}/>
      <Calcular peso={peso} alt={altura} setRes={setResultado}/>
      <Resultado res={resultado}/>
      <Tabela/>
    </>
  );
}

export default App;